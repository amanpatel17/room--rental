import React from 'react'
import Layout from '../components/Layout/Layout';
import  '../css/faq.css';

const Faq = () => {
  return (
   
<Layout>
<section className="accordion_two_section ptb-100">

<section id="faq-section">
        <div className="container">
        <h6 className="h6 text-info m-0">
FAQ
    </h6>
    <h1 className="h1 h-responsive mb-4">
    Frequently asked questions for  rooms rent.
    </h1>
  </div>
    </section>
  <div className="container">
    <div className="row">
      <div className="col-sm-6 accordionTwo">
        <div className="panel-group" id="accordionTwoLeft">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordionTwoLeft" href="#collapseTwoLeftone" aria-expanded="false" className="collapsed">
                Can we list more than one room?
                </a>
              </h4>
            </div>
            <div id="collapseTwoLeftone" className="panel-collapse collapse" aria-expanded="false" role="tablist" style={{height: 0}}>
              <div className="panel-body">
              Yes, you can list any number of rooms. However, the form in List A Room is to list only one room.
              </div>
            </div>
          </div>
          {/* /.panel-default */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a className="collapsed" data-toggle="collapse" data-parent="#accordionTwoLeft" href="#collapseTwoLeftTwo" aria-expanded="false">
                How to list more than one room?
                </a>
              </h4>
            </div>
            <div id="collapseTwoLeftTwo" className="panel-collapse collapse" aria-expanded="false" role="tablist">
              <div className="panel-body">
              The form in List A Room is to list only one room. In case if there are two rooms to list, then you would need to fill the form in List A Room twice and so on.
              </div>
            </div>
          </div>
          {/* /.panel-default */}
        
          {/* /.panel-default */}
        </div>
        {/*end of /.panel-group*/}
      </div>
      {/*end of /.col-sm-6*/}
      <div className="col-sm-6 accordionTwo">
        <div className="panel-group" id="accordionTwoRight">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a className="collapsed" data-toggle="collapse" data-parent="#accordionTwoRight" href="#collapseTwoRightone" aria-expanded="false">
                Can we make any changes once after the form in LIST A ROOM is submitted?
                </a>
              </h4>
            </div>
            <div id="collapseTwoRightone" className="panel-collapse collapse" aria-expanded="false" role="tablist">
              <div className="panel-body">
              Yes, you can edit the listing at any time once the room is booked in Manage Listings.
 
              </div>
            </div>
          </div>
          {/* /.panel-default */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a className="collapsed" data-toggle="collapse" data-parent="#accordionTwoRight" href="#collapseTwoRightTwo" aria-expanded="false">
                Can we remove the listing once our room is booked?
                </a>
              </h4>
            </div>
            <div id="collapseTwoRightTwo" className="panel-collapse collapse" aria-expanded="false" role="tablist">
              <div className="panel-body">
              Yes, you can remove the listing at any time once the room is booked in Manage Listings.
              </div>
            </div>
          </div>
          {/* /.panel-default */}
        
          {/* /.panel-default */}
        </div>
        {/*end of /.panel-group*/}
      </div>
      {/*end of /.col-sm-6*/}
    </div>
  </div>
  {/*end of /.container*/}
</section>




</Layout>



  )
}

export default Faq