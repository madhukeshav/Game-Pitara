<div className="row rightupi">
  <h3>Cryptocurrency</h3>
  <div className="col-sm-4">
    <div className="item">
      <img src="{BitCoin}" alt="" />
    </div>
  </div>
  <div className="col-sm-4">
    <div className="item">
      <img src="{ethereum}" alt="" />
    </div>
  </div>
  <div className="col-sm-4">
    <div className="item">
      <img src="{Litecoin}" alt="" />
    </div>
  </div>
  <div className="col-sm-4">
    <div className="item">
      <img src="{Steller}" alt="" />
    </div>
  </div>
  <div className="col-sm-4">
    <div className="item">
      <img src="{Tether}" alt="" />
    </div>
  </div>
  <div className="col-sm-4">
    <div className="item">
      <img src="{Binance}" alt="" />
    </div>
  </div>
</div>






import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import plus from "./Assets/img/plusblack.png";
import upi from "./Assets/img/upi.png";
import arrow from "./Assets/img/arrow.png";
import logo1 from "./Assets/img/wallet/paytm.png";
import logo2 from "./Assets/img/wallet/astropay.png";
import logo3 from "./Assets/img/wallet/Skrill.png";
import Qr_code from "./Assets/img/wallet/qr_code.png";
import Time_Image from "./Assets/img/wallet/Time_Image.png";
import paytm from "./Assets/img/wallet/paytm.png";
import Phonepe from "./Assets/img/wallet/Phonepe.png";
import GPay from "./Assets/img/wallet/GPay.png";
import Skrill from "./Assets/img/wallet/Skrill.png";
import astropay from "./Assets/img/wallet/astropay.png";
import Neteller from "./Assets/img/wallet/Neteller.png";
import BitCoin from "./Assets/img/wallet/BitCoin.png";
import ethereum from "./Assets/img/wallet/ethereum.png";
import Litecoin from "./Assets/img/wallet/Litecoin.png";
import Steller from "./Assets/img/wallet/Steller.png";
import Tether from "./Assets/img/wallet/Tether.png";
import Binance from "./Assets/img/wallet/Binance.png";

const Wallet = () => {

  // const [showPerpage, setShowPerpage] = useState(5);
  // const [Amount, setAmount] = useState(500);
  // const [pagination, setPagination] = useState({
  //   start: 0,
  //   end: showPerpage,
  // });

  const [isPayment, setIsPayment] = useState("choosePayment")


  return (
    <div className="wallet1">
      <Tabs defaultActiveKey="statement" id="uncontrolled-tab-example">
        <Tab eventKey="statement" title="statement">
          <div className="balance__history">
            <div className="balance">
              <h3>
                total balance INR <span>6000.00</span>
              </h3>
              <button>
                <img src={plus} alt="" />
                Add Money
              </button>
            </div>
            {/* filter */}
            <div className="filter">
              <form action="">
                <div className="row">
                  <div className="form-group col-sm-4">
                    <label htmlFor="period">Period *</label>
                    <select name="period" id="">
                      <option value="all">All</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-4">
                    <label htmlFor="period">Payment Type *</label>
                    <select name="period" id="">
                      <option value="all">All</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-3">
                    <label htmlFor="period" className="last">
                      Payment Type *
                    </label>
                    <button type="submit">Search</button>
                  </div>
                </div>
              </form>
            </div>
            {/* filter end */}

            {/* tables */}
            <div className="payment_history">
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={1}>
                    <td>{1}</td>
                    <td>2021 - 01 - 04</td>
                    <td>deposit</td>
                    <td className="success">sucess</td>
                    <td>1,000.00</td>
                  </tr>
                  <tr key={1}>
                    <td>{1}</td>
                    <td>2021 - 01 - 04</td>
                    <td>deposit</td>
                    <td className="success">sucess</td>
                    <td>1,000.00</td>
                  </tr>
                  <tr key={1}>
                    <td>{1}</td>
                    <td>2021 - 01 - 04</td>
                    <td>deposit</td>
                    <td className="success">sucess</td>
                    <td>1,000.00</td>
                  </tr>
                  <tr key={1}>
                    <td>{1}</td>
                    <td>2021 - 01 - 04</td>
                    <td>deposit</td>
                    <td className="success">sucess</td>
                    <td>1,000.00</td>
                  </tr>
                  <tr key={1}>
                    <td>{1}</td>
                    <td>2021 - 01 - 04</td>
                    <td>deposit</td>
                    <td className="success">sucess</td>
                    <td>1,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* tables end */}
            {/* <div className="pagination">
              <div className="buttons">
                <button
                  type="button"
                  disabled={pagination.start < 5}
                  onClick={() => setCounter(counter - 1)}
                >
                  <i className="fa fa-chevron-left"></i>
                  <i className="fa fa-chevron-left"></i> Previous
                </button>
                <button
                  type="button"
                  disabled={items.length - pagination.end < 5}
                  onClick={() => setCounter(counter + 1)}
                >
                  Next <i className="fa fa-chevron-right"></i>
                  <i className="fa fa-chevron-right"></i>{" "}
                </button>
              </div>
            </div> */}
          </div>
        </Tab>
        <Tab eventKey="deposit" title="Deposit">
          <div className="deposit">
            {/* <form
              action={cashfree.redirectUrl}
              method="POST"
              className="amount"
              onSubmit={handleSubmit}
            >
              <label htmlFor="amount">Amount *</label>
              <input type="text" onChange={handleChange} required />
              <span>INR</span>
              <input
                type="hidden"
                name="signature"
                value={cashfree.signature}
              />
              <input type="hidden" name="appId" value={cashfree.appId} />
              <input
                type="hidden"
                name="customerEmail"
                value={cashfree.customerEmail}
              />
              <input
                type="hidden"
                name="customerName"
                value={cashfree.customerName}
              />
              <input
                type="hidden"
                name="customerPhone"
                value={cashfree.customerPhone}
              />
              <input
                type="hidden"
                name="orderAmount"
                value={cashfree.orderAmount}
              />
              <input type="hidden" name="orderId" value={cashfree.orderId} />
              <input
                type="hidden"
                name="returnUrl"
                value={cashfree.returnUrl}
              />
              <input type="submit" value="Submit" />
            </form> */}


            <div className="upis">


              <div className="row rightupi">
                <h3>e-Wallets</h3>
                <div className="col-sm-4">
                  <div className="item">
                    <img src={paytm} alt="" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item">
                    <img src={Phonepe} alt="" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item">
                    <img src={GPay} alt="" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item">
                    <img src={Skrill} alt="" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item">
                    <img src={astropay} alt="" />
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="item">
                    <img src={Neteller} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="upis">
              <div className="row rightupi">
                <h3>Amount</h3>
                <div className="amount_div">
                  <div className="col-sm-5">
                    <input type="text" className="amount_input" placeholder="Enter Amount" />
                  </div>
                  <div className="col-sm-7">
                    <p><span><img src={arrow} alt="img" /></span>Net Banking, UPi, Debit/Credit Card</p>
                  </div>
                </div>
                <p className="warning_message">* Minimum INR 500</p>
              </div>
            </div>

            <div className="qr_code">
              <div className="row">
                <i class="fa fa-long-arrow-left arrow_back" aria-hidden="true"></i>
              </div>
              <div className="row">
                <p className="disc_para">Scan QR Code, after payment enter your transaction Id and amount deposited below, wait for 30 minutes for amount to get reflected on your wallet <span>*Minimum INR 500</span></p>
              </div>
              <div className="row">
                <img className="qr_code_img" src={Qr_code} alt="QR Code" />
              </div>
              <div className="row amount_proceed">
                <h3>Enter Your Transaction Id</h3>
                <div className="row amount_div">
                  <div className="col-sm-4">
                    <input type="text" placeholder="Your Id" />
                  </div>
                  <div className="col-sm-4">
                    <input type="text" placeholder="Enter Amount" />
                  </div>
                  <div className="col-sm-4 proceed_btn">
                    <p><span><img src={arrow} alt="img" /></span>PROCEED</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="qr_code">
              <div className="row">
                <i class="fa fa-long-arrow-left arrow_back" aria-hidden="true"></i>
              </div>
              <div className="row">
                <img className="qr_code_img2" src={Time_Image} alt="QR Code" />
                <div className="counting">
                  <h4 className="counting_para">60</h4>
                </div>
                <p className="qr_code_p2">Wait for 30 minutes, You will get notified.</p>
                <p className="qr_code_p2">*If amount does not reflect on your wallet in given time <span><Link>Click Here For Support</Link></span></p>
              </div>
            </div>

            <div className="qr_code">
              <div className="row">
                <i class="fa fa-long-arrow-left arrow_back" aria-hidden="true"></i>
              </div>
              <div className="row">
                <p className="disc_para">Scan QR Code, after payment enter your transaction Id and amount deposited below, wait for 30 minutes for amount to get reflected on your wallet <span>*Minimum INR 500</span></p>
              </div>
              <div className="row">
                <img className="qr_code_img" src={Qr_code} alt="QR Code" />
                <p className="qr_code_p">dsfygsiduifgsiugdfiusgduifgsdufgsdfuifsuig</p>
              </div>
              <div className="row amount_proceed">
                <h3>Enter Your Transaction Id</h3>
                <div className="row amount_div">
                  <div className="col-sm-4">
                    <input type="text" placeholder="Enter Amount" />
                  </div>
                  <div className="col-sm-4">
                    {/* <input type="text" placeholder="Enter Amount" /> */}
                  </div>
                  <div className="col-sm-4 proceed_btn">
                    <p><span><img src={arrow} alt="img" /></span>PROCEED</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Tab>
        <Tab eventKey="withdraw" title="Withdraw">
          <div className="deposit">
            <form action="" className="amount">
              <label htmlFor="amount">Withdraw *</label>
              <input type="text" />
              <span>INR</span>
            </form>
            <div className="upis">
              <div className="leftupi">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="upi">
                      UPI <img src={upi} alt="" />
                    </label>
                    <div className="debit">
                      <input type="text" placeholder="Enter UPI id" />
                    </div>
                    <img src={arrow} alt="" className="arrow" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="net">net banking</label>
                    <div className="debit">
                      <select name="net" id="">
                        <option value="">Choose Your Bank</option>
                      </select>
                    </div>
                    <img src={arrow} alt="" className="arrow" />
                  </div>
                  <div className="form-group boreder merg">
                    <label htmlFor="debit">Bank Account</label>
                    <div className="debit bank">
                      <input type="text" placeholder="Your Name" />
                      <select name="bank" id="">
                        <option value="">Choose Your Bank</option>
                      </select>
                      <input type="text" placeholder="account number" />
                      <input type="text" placeholder="ifsc code" />
                    </div>
                    <img
                      src={arrow}
                      alt=""
                      className="arrow"
                      style={{ visibility: "hidden" }}
                    />
                  </div>
                  <div className="form-group boreder ">
                    <label htmlFor="chekbox" style={{ visibility: "hidden" }}>
                      check
                    </label>
                    <div className="debit">
                      <div className="checkbox">
                        <input type="checkbox" />
                        save these account details
                      </div>
                    </div>
                    <img src={arrow} className="arrow" alt="" />
                  </div>
                </form>
              </div>
              <div className="rightupi">
                <h3>e-Wallets</h3>
                <div className="item">
                  <img src={logo1} alt="" />
                </div>
                <div className="item">
                  <img src={logo3} alt="" />
                </div>
                <div className="item">
                  <img src={logo2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="refral" title="Referral"></Tab>
      </Tabs>
    </div>
  );
};

export default Wallet;

