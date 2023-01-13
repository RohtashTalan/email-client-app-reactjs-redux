


const EmailList = () => {




    return(
        <section className="email-list">
            <div className="card">
                <div className="card__left">
                    <p className="avtar text-bold">{'F'}</p>
                </div>
                <div className="card__right">
                    <div className="email-address">
                        <span>From: </span>
                        <span className="text-bold">Foo Bar
                       {"  <alert@gmail.com>"}
                        </span>
                    </div>
                    <div className="email-subject">
                        <span>Subject: </span>
                        <span className="text-bold">Lorem Ipsum </span>
                    </div>
                    <div className="email-preview">
                        <p className="email-preview__text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                        </p>
                    </div>
                    <div className="email-timestamp">
                        <span>26/02/2020 10:30am</span>
                    </div>
                </div>

            </div>
        </section>
    )
}


export default EmailList;