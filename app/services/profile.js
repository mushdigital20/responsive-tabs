import data from '../scripts/data';

class ProfileService
{
  /*constructor($http)
  {
    HTTP.set(this, $http);
  }*/
  
  get() {
      return data;
  }
}

export default {
  name: 'ProfileService',
  fn: ProfileService
};
