import React from 'react'

export const Post=()=> {
  return (
    <div className="post">
      <img className="postImg" src="https://i.ibb.co/L6pqm6Y/2-min.jpg" alt="" />
      <div className="d-flex flex-column align-items-center ">
        <div>
            <span className="m-1 text-secondary" role="button">Zene</span>
            <span className="m-1 text-secondary" role="button">Élet</span>
        </div>
        <h5 className="text-center mt-2 border-bottom pb-3" role="button">
            Lorem ipsum dolor sit amet consectetur 
        </h5>
        <span className="fst-italic text-secondary">1 órával ezelőtt</span>
        <p className="mt-1 postDescription">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quod reiciendis blanditiis exercitationem corporis libero iusto a vel excepturi aspernatur culpa vero qui corrupti accusamus labore, pariatur animi ad ipsam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quisquam consequatur facilis soluta adipisci aut porro explicabo. Fugit quibusdam a labore nam voluptatum rem, praesentium placeat at dicta ratione ipsam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nesciunt veniam qui magni, consectetur alias facere assumenda ratione deserunt. Incidunt ipsum autem pariatur animi veritatis quia voluptatibus nesciunt perferendis corrupti.
        </p>
    </div>
</div>
  )
}
