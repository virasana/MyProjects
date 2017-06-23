import { Injectable } from '@angular/core';
import { ISession } from '../shared/index'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VoterService{

    constructor(private http: Http) {}
    deleteVoter(eventId: number, session: ISession, voterName: string){
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        session.voters = session.voters.filter(voter => voter !== voterName);
        this.http.delete(url).catch(this.handleError)
        .subscribe();
    }

    addVoter(eventId: number, session: ISession, voterName: string){
        session.voters.push(voterName);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
 
        this.http.post(url, JSON.stringify({} ))
        .catch(this.handleError)
        .subscribe(); 
    }

    userHasVoted(session: ISession, voterName: string){
        return session.voters.some(v => v === voterName);
    }

     private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}