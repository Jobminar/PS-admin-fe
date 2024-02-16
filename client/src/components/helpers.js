// helpers.js

// A helper function to validate the form inputs
export function validateForm(name, phone, email, address) {
  return name && phone && email && address;
}

// A helper function to format the phone number
export function formatPhone(phone) {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

// A helper function to calculate the distance between two coordinates
export function calculateDistance([lon1, lat1], [lon2, lat2]) {
  // Use the Haversine formula
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d.toFixed(2);
}

// A helper function to convert degrees to radians
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
