System.register(['angular2/core', 'angular2/router', '../client/components/addPlayer/addPlayer.component', '../client/components/homepage/homepage.component', '../client/components/createMatch/createMatch.component', '../client/components/matchPage/matchPage.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, addPlayer_component_1, homepage_component_1, createMatch_component_1, matchPage_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (addPlayer_component_1_1) {
                addPlayer_component_1 = addPlayer_component_1_1;
            },
            function (homepage_component_1_1) {
                homepage_component_1 = homepage_component_1_1;
            },
            function (createMatch_component_1_1) {
                createMatch_component_1 = createMatch_component_1_1;
            },
            function (matchPage_component_1_1) {
                matchPage_component_1 = matchPage_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        selector: 'lopp-app',
                        templateUrl: './client/app.html',
                    }),
                    router_1.RouteConfig([
                        {
                            component: homepage_component_1.HomepageComponent,
                            name: 'Home',
                            path: '/',
                        }, {
                            component: addPlayer_component_1.AddPlayerComponent,
                            name: 'PlayerAdd',
                            path: '/players/add',
                        }, {
                            component: createMatch_component_1.CreateMatchPage,
                            name: 'CreateMatch',
                            path: '/createMatch',
                        }, {
                            component: matchPage_component_1.MatchPage,
                            name: 'MatchPage',
                            path: '/match',
                        },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map