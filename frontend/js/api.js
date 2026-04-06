// API Configuration
const API_URL = 'http://localhost:5000/api'; // In production, this would be relative or point to Render backend URL

const apiFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem('adminToken');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers
    });
    
    // We parse the JSON unless it is a 204 No Content
    const data = response.status !== 204 ? await response.json() : null;

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return { error: null, data };
  } catch (error) {
    console.error('API Error:', error);
    return { error: error.message, data: null };
  }
};

// API Services Object
const api = {
  // Menu
  getMenu: () => apiFetch('/menu'),
  addMenuItem: (itemData) => apiFetch('/menu', { method: 'POST', body: JSON.stringify(itemData) }),
  deleteMenuItem: (id) => apiFetch(`/menu/${id}`, { method: 'DELETE' }),

  // Reservations
  createReservation: (reservationData) => apiFetch('/reservations', { method: 'POST', body: JSON.stringify(reservationData) }),
  getReservations: () => apiFetch('/reservations'),

  // Reviews
  getReviews: () => apiFetch('/reviews'),
  submitReview: (reviewData) => apiFetch('/reviews', { method: 'POST', body: JSON.stringify(reviewData) }),

  // Contact
  submitContact: (contactData) => apiFetch('/contact', { method: 'POST', body: JSON.stringify(contactData) }),
  getContacts: () => apiFetch('/contact'),

  // Auth
  adminLogin: (credentials) => apiFetch('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
};

export default api;
