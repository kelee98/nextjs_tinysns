import { makeObservable, observable } from "mobx";
import { Component } from "react";

class store{
    use = null;
    constructor(value){
        makeObservable(this,{
            use:observable,
        })

    }
    
}

const myStore = new store;
export default myStore;