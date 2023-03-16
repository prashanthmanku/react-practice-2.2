const Notification = (props) => {
  //  Write your code here.
  const { className, text, url } = props;
  return (
    <div className={`notification-container ${className}`}>
      <img src={url} />
      <p className="notification-text">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="alining">
    <div className="notifications-bg-container">
      <h1 className="heading">Notifications</h1>

      <div className="notifications-container">
        <Notification
          className="primary-bg"
          text="Information Message"
          url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <Notification
          className="success-bg"
          text="Success Message"
          url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <Notification
          className="warning-bg"
          text="Warning Message"
          url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <Notification
          className="error-bg"
          text="Error Message"
          url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

/*solution







*/
/*const Notification = props => {
  const {className, iconUrl, message} = props
  const containerClassName = `notification-container ${className}`
  
  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  )
}

const element = (
  <div className="notifications-app-container">
    <h1 className="title">Notifications</h1>
    <div className="notifications-list-container">
      <Notification
        className="primary-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="success-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="warning-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="danger-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
*/
