import {Observable} from "rxjs";


export class CustomObservableService {
    getCustomObservable(): Observable<Date>{
        return new Observable<Date>(
            observer => {
                setInterval(()=>{
                    observer.next(new Date());
                }, 1000)
            }
        );
    }
}