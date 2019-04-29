
import WPAPI from 'wpapi';

let endpoint = 'https://testpsf.000webhostapp.com/wp-json/';
if (typeof window !== 'undefined') {
    endpoint = `https://cors-anywhere.herokuapp.com/${endpoint}`;
  }
  
const api = new WPAPI({ endpoint });
export default api;