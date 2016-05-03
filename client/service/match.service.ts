import {Match} from 'js/model/match/match.model';
import {Player} from 'js/model/player/player.model';
import {Opponent} from 'js/model/match/opponent.model';

export class MatchService {

  private match: Match;

  constructor() {
    this.match = new Match([]);
  }

  public getMatch(): Match {
    return this.match;
  }

  public addOpponent(player: Player): void {
    let opponent: Opponent = new Opponent(player);

    this.match.addOpponent(opponent);
  }

  public isMatchReady(): Boolean {
    return this.match.getOpponent(0) !== undefined && this.match.getOpponent(1) !== undefined;
  }
}
