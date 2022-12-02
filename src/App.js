import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs } from 'react-bootstrap';
import GetLightGroup from './GetLightGroup/GetLightGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="groupOne" title="Група 1">
            <GetLightGroup group={0} />
          </Tab>
          <Tab eventKey="groupTwo" title="Група 2">
            <GetLightGroup group={1} />
          </Tab>
          <Tab eventKey="groupTree" title="Група 3">
            <GetLightGroup group={2} />
          </Tab>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
