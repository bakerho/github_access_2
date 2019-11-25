import React from 'react';
import Moment from 'react-moment';
const imgStyle = {
borderRadius: "25%",
width: "125px",
height: "125px"
};
const imgStyle8 = {
borderRadius: "5%",
width: "50px",
height: "50px"
};
const Profile = (props) => {
return (
<div>
   <div>
      {props.infoclean.avatar_url ?
      <div class="row justify-content-right text-dark">
         <div class="col-md-2 text-left"></div>
         <div class="col-md-8 text-left border-right">
          <div class="slide-in-left"><img src={props.infoclean.avatar_url}
               alt="Profile"
               style={imgStyle}/></div><br></br><br></br>
         </div>

      </div>
      : null }
   </div>
   <div>
      {props.infoclean.name ?
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-2 text-right">
         <h7><strong>Name:</strong></h7></div>
         <div class="col-md-8 text-left border-right border-right"><h7><kbd>{props.infoclean.name}</kbd></h7></div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.created_at ?
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-2 text-right"><h7><strong>Joined:</strong></h7></div>
         <div class="col-md-8 text-left border-right"><h7><kbd>{<Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</kbd></h7></div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.blog ?
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-2 text-right"><h7><strong>Blog:</strong></h7></div>
         <div class="col-md-8 text-left border-right"><a href={
            props.infoclean.blog.search("http") !== -8 ? props.infoclean.blog
            : "http://" +  props.infoclean.blog } target="_blank"><h7><kbd>{props.infoclean.blog}</kbd></h7></a>
         </div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.location ?
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-2 text-right"><h7><strong>Location</strong></h7></div>
         <div class="col-md-8 text-left border-right"><h7><kbd>{props.infoclean.location}</kbd></h7></div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.company ?
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-2 text-right"><h7><strong>Company:</strong></h7></div>
         <div class="col-md-8 text-left border-right"><h7><kbd>{props.infoclean.company}</kbd></h7></div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.followers ?
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-2 text-right"><h7><strong>Followers:</strong></h7></div>
         <div class="col-md-8 text-left border-right"><h7><kbd>{props.infoclean.followers}</kbd></h7></div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.following ?
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-2 text-right"><h7><strong>Following:</strong></h7></div>
         <div class="col-md-8 text-left border-right"><h7><kbd>{props.infoclean.following}</kbd></h7></div>
      </div></div>
      : null }
   </div>
   <div>
      {props.infoclean.bio ?
      <div class="slide-in-left"><div class="row justify-content-left text-dark">
         <div class="col-md-2 text-right"><h7><strong>Bio:</strong></h7></div>
         <div class="col-md-8 text-left border-right"><h7><kbd>{props.infoclean.bio}</kbd></h7></div>
      </div></div>
      : null }
   </div>

   <div>
      {props.infoclean.login ? <div>{ <img src={"http://ghchart.rshah.org/"+props.infoclean.login} alt="Github chart" />
    }<br/><a href="https://ghchart.rshah.org/" target="_blank"></a></div> : null }
    </div>
   <div>
  </div>
</div>
)
};
export default Profile;
