export const endPoints = {
  user_controller: {
    add: "/v1/users",
    byId: (id) => `/v1/users/${id}`,
    delete: (id) => `/v1/users/${id}`,
  },
  like_controller: {
    create: (userId, eventId) => `/api/like-event/${eventId}/${userId}`,
  },
  gift_card_controller: {
    getbyId: (id) => `/api/gift-card/${id}`,
    editbyId: (id) => `/api/gift-card/${id}`,
    deletebyId: (id) => `/api/gift-card/${id}`,
    create: `/api/gift-card/create-gift-card`,
    get: `/api/gift-card/all-gift-cards`,
  },

  authentication_controller: {
    signup: "/v1/auth/signup",
    signin: "/v1/auth/signin",
    refresh: "/v1/auth/refresh",
  },
  reservation_controller: {
    create_registered: "/api/reservation/create-reservation-registered",
    create_unregistered: "/api/reservation/create-reservation-unregistered",
    get_reservation: (userId) => `/api/reservation/${userId}`,
  },

  event_controller: {
    getbyId: (id) => `/api/event/${id}`,
    editbyId: (id, params) => `/api/event/${id}?${params}`,
    deletebyId: (id) => `/api/event/${id}`,
    create: (params) => `/api/event/create-event?${params}`,
    search: "/api/event/search",
    wishlist: (id) => `/api/event/liked-events/${id}`,
    searchWithCategory: (category) => `/api/event/category/${category}`,
    date_between: "/api/event/date-between",
    date_between_category: (startTime, endTime, category) =>
      `/api/event/date-between-category?startDate=${startTime}&endDate=${endTime}&category=${category}`,
    date_between_bycategory: (category) =>
      `/api/event/date-between/${category}`,
    all: "/api/event/all-events",
  },
};
// https://qonaqol.onrender.com/qonaqol/swagger-ui/index.html#/event-controller/findAllEvents
