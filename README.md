# keypoints
1) create redux folder in src and in redux folder make a store file.
   - configure store in store file 
2) provide that store to index by wrapping App component with provider tag and pass store as a parameter in provider.
3) make a folder name features in src folder and in features folder make slicefile, in this file make
   slice and store it in a variable like counterSlice
   in this counterSlice, we provide name,initialstate and reducers (all actions will be defined in
   reducers because action generated will be there in reducer )
   then export default studentSlice.reducer and import it in store file.
* ### name option in createslice will be the same which will be provided in reducer in store.
4) in createslice file goto reducers and make a recuder which contains state and action
5) destructure studentSlice.actions and export in studentSlice file (basically in reducers we define action creators, coz we get generated actions here,to understand)
- ### all the action creaters(functions) are there in reducers so destructure them and store them in seprate variable and export so that we can use in any component by importing there.
- example from this code is...... export const { increment, decrement, incrementByAmount,decrementByAmount } = counterSlice.actions
