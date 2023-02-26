import React from 'react'
import './Aboutus.css'

const Aboutus = () => {
  return (
    <>
    <title>Animate On Scroll | AOS</title>
      <div className="aboutusmainbody">
        
  <div className="all-padding">
  <div className="heading"><h2>-Who Are We-</h2></div>
  <div className="content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magni non
    provident quibusdam maiores numquam facere dolores nesciunt architecto
    repellat quia error sunt, maxime tenetur vero ducimus dolorem fugit dolorum
    est. Quam, quia magni. Porro quasi est obcaecati quod corporis atque
    similique nulla soluta dolore accusantium? Reprehenderit veniam quisquam
    obcaecati corrupti ipsam dolore iste quia reiciendis, consequatur
    voluptatibus at laboriosam minima, modi odit aliquid, vitae tempore odio
    omnis soluta sequi. Libero commodi dicta minus accusamus facere dolorem
    quae, nisi incidunt eum aliquam veniam explicabo perspiciatis aspernatur
    sunt quas illo quos quasi et! Animi distinctio ab placeat maiores possimus
    error ipsam.
  </div>
  <div className="container">
    {/*-----------------------------------------------------------*/}
    <div
      className="div1 persontalk"
      data-aos="fade-left"
      data-aos-duration={1000}
      data-aos-once="true"
    >
      <img
        src="https://www.medicaps.ac.in/upload/medicapsuniv/page/1621580768.jpeg"
        alt="person1"
        className="personImg-talked"
      />
      <div className="text">
        <p>
          I am enormously delighted to welcome you all to being a part of the
          Medi-Caps University family. I plead to the Almighty to bless you with
          an excellent future ahead.
        </p>
      </div>
    </div>
    {/*----------------------------------------------------------*/}
    <div className="div2 persontalk" data-aos="fade-right">
      <img
        src="https://www.medicaps.ac.in/upload/medicapsuniv/page/1625643116.jpg"
        alt="person2"
        className="personImg-talked"
      />
      <div className="text">
        <p>
          Our mission is to make our students well-equipped at various levels of
          Graduate and Post Graduate degrees with an outstanding CBCS curriculum
          and an unprecedented teaching-mentoring pedagogy.
        </p>
      </div>
    </div>
    {/* -----------------------------------------------------------*/}
    <div className="div3 persontalk" data-aos="fade-up">
      <img
        src="https://static01.nyt.com/images/2021/10/13/science/13shatner-launch-oldest-person-sub/13shatner-launch-oldest-person-sub-superJumbo.jpg"
        alt="person3"
        className="personImg-talked"
      />
      <div className="text">
        <p>
          Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Ad, veniam?
        </p>
      </div>
    </div>
  </div>
  <div className="content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut
    adipisci, fuga, quia animi vitae saepe ullam autem, atque voluptas fugit ut
    nam minus obcaecati reprehenderit impedit cum rem laborum similique.
    Officiis nihil assumenda mollitia itaque voluptate soluta debitis optio, vel
    accusantium! Provident totam quae autem consequatur consectetur. Iure,
    cumque.
  </div>

</div>
      <div>
        
          <div className='aboutus-pic'>
          
        <div className="wrapper">
          
          <img className="diamond" src="https://source.unsplash.com/random/600x600?water" alt="" />
          <img className="diamond" src="https://source.unsplash.com/random/600x600?summer" alt="" />
          <img className="diamond" src="https://source.unsplash.com/random/600x600?plants" alt="" />
          <img className="diamond" src="https://source.unsplash.com/random/600x600?snow" alt="" />
          <img className="diamond" src="https://source.unsplash.com/random/600x600?roses" alt="" />
          <img className="diamond" src="https://source.unsplash.com/random/600x600?sky" alt="" />
          <img className="diamond" src="https://source.unsplash.com/random/600x600?nature" alt="" />
          <img className="diamond" src="https://source.unsplash.com/random/600x600?blossom" alt="" />
          <img className="diamond" src="https://source.unsplash.com/random/600x600?ice" alt="" />
          <img className="diamond" src="https://source.unsplash.com/random/600x600?spring" alt="" />
        </div>
      </div>
      </div>
      <div className="wrapper-2">
  <h1 className="heading">Our Team</h1>
  <div className="cols">
    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container-hover">
        <div
          className="front"
          style={{ backgroundImage: "url(https://unsplash.it/500/500/)" }}
        >
          <div className="inner">
            <p>Diligord</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              cum repellat velit quae suscipit c.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container-hover">
        <div
          className="front"
          style={{ backgroundImage: "url(https://unsplash.it/511/511/)" }}
        >
          <div className="inner">
            <p>Rocogged</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              cum repellat velit quae suscipit c.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container-hover">
        <div
          className="front"
          style={{ backgroundImage: "url(https://unsplash.it/502/502/)" }}
        >
          <div className="inner">
            <p>Strizzes</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              cum repellat velit quae suscipit c.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container-hover">
        <div
          className="front"
          style={{ backgroundImage: "url(https://unsplash.it/503/503/)" }}
        >
          <div className="inner">
            <p>Clossyo</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              cum repellat velit quae suscipit c.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container-hover">
        <div
          className="front"
          style={{ backgroundImage: "url(https://unsplash.it/504/504/)" }}
        >
          <div className="inner">
            <p>Rendann</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              cum repellat velit quae suscipit c.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container-hover">
        <div
          className="front"
          style={{ backgroundImage: "url(https://unsplash.it/505/505/)" }}
        >
          <div className="inner">
            <p>Reflupper</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              cum repellat velit quae suscipit c.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container-hover">
        <div
          className="front"
          style={{ backgroundImage: "url(https://unsplash.it/506/506/)" }}
        >
          <div className="inner">
            <p>Acirassi</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              cum repellat velit quae suscipit c.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col" ontouchstart="this.classList.toggle('hover');">
      <div className="container-hover">
        <div
          className="front"
          style={{ backgroundImage: "url(https://unsplash.it/508/508/)" }}
        >
          <div className="inner">
            <p>Sohanidd</p>
            <span>Lorem ipsum</span>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              cum repellat velit quae suscipit c.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
   </>
  )
}

export default Aboutus