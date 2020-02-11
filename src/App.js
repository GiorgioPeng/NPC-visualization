import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import lightGreen from '@material-ui/core/colors/lightGreen'
import Graph from './Graph'
import Icon from './icon.png'
const useStyles = makeStyles({
  root: {
    width: 500,
    backgroundColor:lightGreen['A700']
  },
  img:{
    maxWidth:'30px',
  }
});

function App(props) {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
      >
        <BottomNavigationAction label="各省份图表" icon={<img src={Icon} alt="icon" className={classes.img} />} />
        <BottomNavigationAction label="市级图表" icon={<img src={Icon} alt="icon" className={classes.img} />} />
        <BottomNavigationAction label="全球图表" icon={<img src={Icon} alt="icon" className={classes.img} />} />
      </BottomNavigation>
      <Graph />
    </div>
  );

}

export default App;
