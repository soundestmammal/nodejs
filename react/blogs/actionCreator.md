Use of Redux Thunk inside my Action Creator

Purpose - I will be making an asyncronous call to an outside endpoint, and it will take time to get response.

I would like to delay dispatch of the action to the reducers. 

To do this, I wrap my action in a function, that will only return the object if things are working out.