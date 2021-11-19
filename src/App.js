
import './App.css';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

function App() {
  return (
    <div className="App">
      <div className="plan_container">
        <div className="price_part">
          <h1 className="plan_name">Free</h1>
          <p><span className="price">$0</span>/month</p>
        </div>
        <div className="details_part">
            <ul className="list_part">
              <li className="list_item checked_item"><CheckIcon/>Single User</li>
              <li className="list_item checked_item"><CheckIcon/>5GB Storage</li>
              <li className="list_item checked_item"><CheckIcon/>Unlimited Public Projects</li>
              <li className="list_item checked_item"><CheckIcon/>Community Access</li>
              <li className="list_item not_checked_item"><ClearIcon/>Unlimited Private Projects</li>
              <li className="list_item not_checked_item"><ClearIcon/>Dedicated Phone Support</li>
              <li className="list_item not_checked_item"><ClearIcon/>Free Subdomain</li>
              <li className="list_item not_checked_item"><ClearIcon/>Monthly Status Reports</li>
            </ul>
          </div>
          <Button variant="contained" className="btn">SELECT</Button>
      </div>

      <div className="plan_container">
        <div className="price_part">
          <h1 className="plan_name">PLUS</h1>
          <p><span className="price">$9</span>/month</p>
        </div>
        <div className="details_part">
            <ul className="list_part">
              <li className="list_item checked_item"><CheckIcon/>5 Users</li>
              <li className="list_item checked_item"><CheckIcon/>50GB Storage</li>
              <li className="list_item checked_item"><CheckIcon/>Unlimited Public Projects</li>
              <li className="list_item checked_item"><CheckIcon/>Community Access</li>
              <li className="list_item checked_item"><CheckIcon/>Unlimited Private Projects</li>
              <li className="list_item checked_item"><CheckIcon/>Dedicated Phone Support</li>
              <li className="list_item checked_item"><CheckIcon/>Free Subdomain</li>
              <li className="list_item not_checked_item"><ClearIcon/>Monthly Status Reports</li>
            </ul>
          </div>
          <Button variant="contained" className="btn">SELECT</Button>
      </div>

      <div className="plan_container">
        <div className="price_part">
          <h1 className="plan_name">PRO</h1>
          <p><span className="price">$49</span>/month</p>
        </div>
        <div className="details_part">
            <ul className="list_part">
              <li className="list_item checked_item"><CheckIcon/>Unlimited Users</li>
              <li className="list_item checked_item"><CheckIcon/>150GB Storage</li>
              <li className="list_item checked_item"><CheckIcon/>Unlimited Public Projects</li>
              <li className="list_item checked_item"><CheckIcon/>Community Access</li>
              <li className="list_item checked_item"><CheckIcon/>Unlimited Private Projects</li>
              <li className="list_item checked_item"><CheckIcon/>Dedicated Phone Support</li>
              <li className="list_item checked_item"><CheckIcon/>Unlimited Free Subdomains</li>
              <li className="list_item checked_item"><CheckIcon/>Monthly Status Reports</li>
            </ul>
          </div>
          <Button variant="contained" className="btn">SELECT</Button>
      </div>
    </div>
  );
}

export default App;
