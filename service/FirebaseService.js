const admin = require('firebase-admin');
serviceAccount = require("./serviceAccount.json");
class FirebaseService{

    constructor(){
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://barlyon-23ade.firebaseio.com"
        });
        this.db = admin.database();
    }

    addToFirebase(data){

        const ref = this.db.ref("/");
        const itemsRef = ref.child("Ticket");
        const newItemRef = itemsRef.push();
        return newItemRef.set({
            type: data.problem,
            message: data.textprob
        }).then(ref => {
            console.log('ticket add');
        }).catch(error =>{
            console.log(error);
        });
    }
    getAllTickets(){

        this.db.ref('/Tickets')
            .once('value').then((result) => {
                return result
        })
    }

}
module.exports = FirebaseService;









