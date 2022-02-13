import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
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
import LoaderImg from "./Assets/img/pageLoader.gif";
import Swal from 'sweetalert2'

const Wallet = () => {

  // const [showPerpage, setShowPerpage] = useState(5);
  // const [Amount, setAmount] = useState(500);
  // const [pagination, setPagination] = useState({
  //   start: 0,
  //   end: showPerpage,
  // });
  let history = useHistory();
  const [paymentProcess, setPaymentProcess] = useState("choosePayment")
  const [isLoading, setIsLoading] = useState(false);
  const [paymetAmount, setPaymentAmount] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [addPaymentError, setAddPaymentError] = useState("")
  const [isAddAmountForm, setIsAddAmountForm] = useState(false)
  const [paymentHistory, setPaymentHistory] = useState([])

  const [amountForBank, setAmountForBank] = useState("")
  const [bankForBank, setBankForBank] = useState("")
  const [acNumberForBank, setAcNumberForBank] = useState("")
  const [ifscForBank, setIfscForBank] = useState("")
  const [withdrawlErrorMessage, setWithdrawlErrorMessage] = useState(false)




  const handeAddedAmount = (e) => {
    setPaymentAmount(e.target.value);
    if (e.target.value == "" || e.target.value.length < 1) {
      setAddPaymentError("Please fill the amount before proceed");
      setIsAddAmountForm(false)
    } else {
      setAddPaymentError("");
      setIsAddAmountForm(true)
    }
  }

  const handelpaymentId = (e) => {
    setPaymentId(e.target.value);
    if (e.target.value.length === 2) {
      setAddPaymentError("Please fill the payment amount before proceed");
      setIsAddAmountForm(false)
    } else {
      setAddPaymentError("");
      setIsAddAmountForm(true)
    }
  }

  const handelUpdateWallet = () => {
    fetch("https://api.gamepitara.com/api/v1/users/get-profile-details", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Sender": "155145",
        "Authorization": `Token token=${localStorage.getItem("auth")
          }`
      },
    }).then(result => {
      if (result.status === 200) {
        result.json().then(result => {
          localStorage.setItem("userBalance", result.account_balance)

        })
      } else {
        // handleLogout();
      }
    })
  }

  useEffect(() => {
    handelUpdateWallet();
    PaymentHistory();
  }, [])

  useEffect(() => {
    console.log("hello", amountForBank)
  }, [amountForBank])

  const submitBankDetails = () => {
    if (amountForBank == "") {
      setWithdrawlErrorMessage("Please fill the amount to withdrawal in your account");
    } else if (bankForBank == "") {
      setWithdrawlErrorMessage("Please select bank name");
    } else if (acNumberForBank == "") {
      setWithdrawlErrorMessage("Please fill your account number");
    } else if (ifscForBank == "") {
      setWithdrawlErrorMessage("Please fill Your IFSC");
    } else {
      setWithdrawlErrorMessage(false);
      PaymentWithdraw()

    }
  }

  const PaymentWithdraw = () => {
    let ApiData = {
      "bank_account_name": "mdhukeshav",
      "ifsc_code": ifscForBank,
      "bank_account_number": acNumberForBank,
      "bank_name": bankForBank,
      "amount": amountForBank,
      "currency": "INR"
    }
    let Auth = localStorage.getItem("auth")
    if (Auth) {
      fetch("https://api.gamepitara.com/api/v1/wallet_withdraw_requests", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Sender": "155145",
          "Authorization": `Token token=${Auth}`,
        },
        body: JSON.stringify(ApiData)

      }).then(result => {
        if (result.status === 200) {
          result.json().then(result => {
            Swal.fire({
              position: 'center-center',
              icon: 'success',
              title: 'Withdrawal is sucessfuly done',
              showConfirmButton: false,
              timer: 2000
            })
          })
        } else {
          Swal.fire({
            position: 'center-center',
            icon: 'error',
            title: 'Somthing went wrong! Please try again',
            showConfirmButton: false,
            timer: 2000
          })
        }
        setIsLoading(false);
        // window.location.reload();

      })
    }
  }


  const PaymentHistory = () => {
    let Auth = localStorage.getItem("auth")
    if (Auth) {
      fetch("https://api.gamepitara.com/api/v1/transactions", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Sender": "155145",
          "Authorization": `Token token=${Auth}`,
        },

      }).then(result => {
        if (result.status === 200) {
          result.json().then(result => {
            setPaymentHistory(result.data);
          })
        }
      })
    }
  }



  const PaymentExecute = () => {
    let ApiData = {
      "reference_id": paymentId,
      "amount": paymetAmount,
      "currency": "INR"
    }
    let Auth = localStorage.getItem("auth")
    if (Auth && isAddAmountForm) {
      setPaymentProcess("paymentProcess");
      setIsLoading(true);
      fetch("https://api.gamepitara.com/api/v1/wallet_requests", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Sender": "155145",
          "Authorization": `Token token=${Auth}`,
        },
        body: JSON.stringify(ApiData)

      }).then(result => {
        if (result.status === 200) {
          result.json().then(result => {
            setPaymentProcess("sucess");
          })
        } else {
          setPaymentProcess("failed");
        }
        setIsLoading(false);

      })
    }
  }






  return (
    <div className="wallet1">
      <Tabs defaultActiveKey="statement" id="uncontrolled-tab-example">
        <Tab eventKey="statement" title="statement">
          <div className="balance__history">
            <div className="balance">
              <h3 className="m-auto">
                total balance INR:  <span><b>{localStorage.getItem("userBalance") ? localStorage.getItem("userBalance") : 0.00}</b></span>
              </h3>
              {/* <button>
                <img src={plus} alt="" />
                Add Money
              </button> */}
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
              {paymentHistory.length > 0 ? (
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
                    {
                      paymentHistory.map((transaction, index) => {
                        return (
                          <tr key={index} >
                            <td>{index + 1}</td>
                            <td>{transaction.created_at_timestamp}</td>
                            <td>{transaction.type}</td>
                            <td className="success">sucess</td>
                            <td>{`${transaction.currency} ${transaction.amount}`}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              ) :
                (
                  <h4 className="noTransaction">You have no transaction till now!</h4>
                )}
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
            {paymentProcess === "choosePayment" ?
              <div className="upis mt-5">
                <div className="row rightupi">
                  <h3>e-Wallets</h3>
                  <div className="col-sm-4">
                    <div className="item" onClick={() => setPaymentProcess("request")}>
                      <img src={paytm} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="item" onClick={() => setPaymentProcess("request")}>
                      <img src={Phonepe} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="item" onClick={() => setPaymentProcess("request")}>
                      <img src={GPay} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="item" onClick={() => setPaymentProcess("request")}>
                      <img src={Skrill} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="item" onClick={() => setPaymentProcess("request")}>
                      <img src={astropay} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="item" onClick={() => setPaymentProcess("request")}>
                      <img src={Neteller} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              : paymentProcess === "request" ?

                <div className="qr_code">
                  <div className="row">
                    <i className="fa fa-long-arrow-left arrow_back" aria-hidden="true" onClick={() => setPaymentProcess("choosePayment")}></i>
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
                        <input type="text" placeholder="Your Id" onChange={(e) => handelpaymentId(e)} />
                      </div>
                      <div className="col-sm-4">
                        <input type="number" placeholder="Enter Amount" onChange={(e) => handeAddedAmount(e)} />
                      </div>
                      <div className="col-sm-4 proceed_btn" onClick={PaymentExecute}>
                        <p><span><img src={arrow} alt="img" /></span>PROCEED</p>
                      </div>
                      <p className="text-danger pl-3" ><small>{addPaymentError}</small></p>

                    </div>
                  </div>
                </div>
                : paymentProcess === "sucess" || paymentProcess === "paymentProcess" || paymentProcess === "failed" ?
                  <>
                    <div className="qr_code">
                      {!isLoading && <div className="row">
                        <i className="fa fa-long-arrow-left arrow_back" aria-hidden="true" onClick={() => setPaymentProcess("choosePayment")}></i>
                      </div>}

                      <div className="row paymentLoaderAdd">
                        {paymentProcess === "sucess" ?
                          <>
                            <img className="qr_code_img2" src={Time_Image} alt="QR Code" />
                            <div className="counting">
                              <h4 className="counting_para">
                                <i className="fa fa-check arrow_back" aria-hidden="true"></i>
                              </h4>
                            </div>
                            <p className="qr_code_p2">Wait for 30 minutes, You will get notified.</p>
                            <button type="button" class="btn ml-auto mr-auto mb-3 btn-sm checkBalanceBtn" onClick={() => window.location.reload()}>Check Balance</button>

                            <p className="qr_code_p2">*If amount does not reflect on your wallet in given time <span><Link>Click Here For Support</Link></span></p>
                          </>
                          :
                          <>
                            <img className="qr_code_img2" src={Time_Image} alt="QR Code" />
                            <div className="counting">
                              <h4 className="counting_para">
                                <i className="fa fa-times arrow_back" aria-hidden="true"></i>
                              </h4>
                            </div>
                            <p className="qr_code_p2">Somthing went wrong! Please try again.</p>
                            <p className="qr_code_p2">*If amount does not reflect on your wallet in given time <span><Link>Click Here For Support</Link></span></p>
                          </>
                        }
                        {isLoading && <div className="paymentLoader">
                          <img src={LoaderImg} alt="loader" />
                        </div>}
                      </div>

                    </div>

                  </>
                  :
                  <div className="qr_code">
                    <div className="row">
                      <p className="qr_code_p2">Somthing went wrong! Please try again.</p>
                    </div>
                  </div>
            }
          </div>
        </Tab>
        <Tab eventKey="withdraw" title="Withdraw">
          <div className="deposit">
            {/* <form action="" className="amount">
              <label htmlFor="amount">Withdraw *</label>
              <input type="text" />
              <span>INR</span>
            </form> */}
            <div className="upis">
              <div className="leftupi">
                {/* <form> */}
                {/* <div className="form-group">
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
                  </div> */}
                <div className="form-group boreder merg">
                  <label htmlFor="debit">Bank Account</label>
                  <div className="debit bank">
                    {/* <input type="text" placeholder="Your Name" onChange={setNameForBank} /> */}
                    <input type="number" value={amountForBank} min={50} placeholder="Amount" onChange={(e) => setAmountForBank(e.target.value)} />
                    <select name="bank" id="" onChange={(e) => setBankForBank(e.target.value)}>
                      <option value="">Choose Your Bank</option>
                      <option value="Axis Bank" >Axis Bank</option>
                      <option value="ICICI" >ICICI</option>
                      <option value="Central Bank" >Central Bank</option>
                      <option value="State Bank of India" >State Bank of India</option>
                      <option value="PayTM Bank" >PayTM Bank</option>
                      <option value="Yes Bank" >Yes Bank</option>
                    </select>
                    <input type="number" placeholder="account number" onChange={(e) => setAcNumberForBank(e.target.value)} />
                    <input type="text" placeholder="ifsc code" onChange={(e) => setIfscForBank(e.target.value)} />
                    {withdrawlErrorMessage && <small className="w-100 text-danger">{withdrawlErrorMessage}</small>}
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
                  <img src={arrow} className="arrow" alt="" onClick={() => submitBankDetails()} />

                </div>
                {/* </form> */}
              </div>
              {/* <div className="rightupi">
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
              </div> */}
            </div>
          </div>
        </Tab>
        <Tab eventKey="refral" title="Referral"></Tab>
      </Tabs>
    </div >
  );
};

export default Wallet;
