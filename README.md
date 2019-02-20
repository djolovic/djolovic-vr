# djolovic-vr


#### use [react-router](https://github.com/ReactTraining/react-router) for react-vr
 #### you can run this example 
 #### 1. git clone https://github.com/djolovic/djolovic-vr.git
 #### 2. cd djolovic-vr
 #### 3. npm i
 #### 4. npm start
 #### 5.open your browser, http://localhost:8081/vr/
```
import { MemoryRouter as Router, Redirect, Route, Switch } from 'react-router';
import TS1 from './src/test'
import TS2 from './src/test_1'

class Example extends Component{
  render(){
    return(
      <Router>
        <View>
          <Route exact path='/' component={TS1}/>
          <Route exact path='/test_1' component={TS2}/>
          <Route exact path='/test' component={TS1}/>
        </View>
      </Router>
    )
  }
}
```