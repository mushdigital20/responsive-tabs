class HomeController {
    constructor(ProfileService) {
        this.title = 'Profile Browser';
        this.profiles = ProfileService.get();
        
    }
}

HomeController.$inject = ['ProfileService'];

export default {
  name: 'HomeController',
  fn: HomeController
};
