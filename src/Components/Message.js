import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from "react-bootstrap";


const Message = () => {
  // const url = "https://jsonplaceholder.typicode.com/users";

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const test = fetch(url, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setItems(result);
  //       },
  //       (error) => {}
  //     );
  //   console.log(test);
  // }, []);
  return (
    <div>
      <div className="wallet1 message">
        <Tabs defaultActiveKey="statement" id="uncontrolled-tab-example">
          <Tab eventKey="statement" title="statement">
            {/* tables */}
            <table className="table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Subject</th>
                  <th>Date & Time</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* {items.slice(0, 9).map((item) => ( */}
                <tr key={1}>
                  <td>{1}</td>
                  <td>GM game maintainance</td>
                  <td>2021-01-04/16:50</td>
                  <td className="success"><i className="fa fa-trash"></i></td>
                </tr>
                <tr key={1}>
                  <td>{1}</td>
                  <td>GM game maintainance</td>
                  <td>2021-01-04/16:50</td>
                  <td className="success"><i className="fa fa-trash"></i></td>
                </tr>
                <tr key={1}>
                  <td>{1}</td>
                  <td>GM game maintainance</td>
                  <td>2021-01-04/16:50</td>
                  <td className="success"><i className="fa fa-trash"></i></td>
                </tr>
                <tr key={1}>
                  <td>{1}</td>
                  <td>GM game maintainance</td>
                  <td>2021-01-04/16:50</td>
                  <td className="success"><i className="fa fa-trash"></i></td>
                </tr>
                <tr key={1}>
                  <td>{1}</td>
                  <td>GM game maintainance</td>
                  <td>2021-01-04/16:50</td>
                  <td className="success"><i className="fa fa-trash"></i></td>
                </tr>
                <tr key={1}>
                  <td>{1}</td>
                  <td>GM game maintainance</td>
                  <td>2021-01-04/16:50</td>
                  <td className="success"><i className="fa fa-trash"></i></td>
                </tr>
                {/* ))} */}
              </tbody>
            </table>
            {/* tables end */}

          </Tab>
          <Tab eventKey="notification" title="Notification"></Tab>


        </Tabs>
      </div>
    </div>
  )
}

export default Message
