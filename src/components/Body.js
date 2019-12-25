import React from "react";

function Body(props) {
    return (
            <div > {/* className = container flex flex__column*/}
                <div className="fullscreen flex flex__column flex-center bg-lighter-gray">
                    <h1 className="login-logo logo-text">
                        <span className="bold">fuse</span> | outreach
                    </h1>
                    <button
                        className="login-button btn btn-large btn-primary"
                        type="submit"
                        onClick={() => { props.login() }}
                        >Login
                    </button>
                </div>
            </div>
    );
}

export default Body;