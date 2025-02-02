import ComContainer from "@/components/common/Container";

import "@/styles/pages/common/error.scss"

const ErrorPage = () => {
  return (
    <ComContainer type="page" className="error-page">
      <section className="container">
        <div className="content">
          <div className="left-side">
            <div className="left-side_content">
              <p>Error 404</p>
              <h2>Hey Buddy</h2>
              <div>
                <p>We can't seem to find the page</p>
                <p>You are looking for.</p>
              </div>
              <button>Go Home</button>
            </div>
          </div>
          <div className="right-side">
            <img
              src="https://i.postimg.cc/9FBm9KyD/Ghost-img.png"
              alt="Ghost Image"
            />
            <div className="right-side__shadow"></div>
          </div>
        </div>
      </section>
    </ComContainer>
  );
};

export default ErrorPage;
