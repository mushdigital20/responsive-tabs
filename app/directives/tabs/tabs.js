class TabsController{
    constructor($scope, $filter) {
        this.selectedTab = 0;
        this.tabs = $filter('orderBy')($scope.tabs,'firstName');
    }
    selectTab(tab) {
        this.selectedTab = tab;
    }
}

TabsController.$inject = ['$scope', '$filter'];

function TabsDirective() {
  return {
    restrict: 'EA',
    templateUrl: 'tabs/tabs.html',
    replace: true,
    scope: {
      tabs: '='
    },
    link: (scope, element) => {
    },
    controller: TabsController,
    controllerAs:'ctrl'
  };
}

export default {
  name: 'responsiveTabs',
  fn: TabsDirective
};