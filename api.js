
import WPAPI from 'wpapi';

let endpoint = 'https://demo.wp-api.org/wp-json/';
if (typeof window !== 'undefined') {
    endpoint = `https://cors-anywhere.herokuapp.com/${endpoint}`;
  }
  

const api = new WPAPI({ endpoint });
export default api;