// NeuroBridge Persistence Layer (localStorage)
// Will upgrade to Supabase for production

const PREFIX = "nb_";

export const DB = {
  get(key) {
    try {
      const val = localStorage.getItem(PREFIX + key);
      return val ? JSON.parse(val) : null;
    } catch {
      return null;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },

  del(key) {
    try {
      localStorage.removeItem(PREFIX + key);
    } catch {
      // silent
    }
  },

  // Get current logged-in user
  getCurrentUser() {
    const uid = this.get("current_user");
    if (!uid) return null;
    return this.get("user:" + uid);
  },

  // Save user and set as current
  saveUser(user) {
    this.set("user:" + user.id, user);
    this.set("current_user", user.id);
  },

  // Logout
  logout() {
    this.del("current_user");
  },
};
