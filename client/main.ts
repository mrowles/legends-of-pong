import {bootstrap}    from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS}  from '@angular/router-deprecated';

import {AppComponent} from 'js/app.component';
import {PlayerService} from 'js/service/player.service';
import {MatchService} from 'js/service/match.service';

bootstrap(AppComponent, [PlayerService, MatchService, ROUTER_PROVIDERS]);
