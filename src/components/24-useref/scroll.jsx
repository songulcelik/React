import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap';
import "./scroll.scss"



const Paragraphs = ({rowCount=10}) => {
  return (
   <>
   {[... new Array(rowCount)].map((_,index)=>(<p key={index}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque optio veritatis ab. Perspiciatis numquam, error odit maiores molestiae debitis excepturi est aliquid nisi fugit labore doloribus, omnis explicabo atque?
   Hic id dignissimos quis? A eos natus inventore ratione sed obcaecati eveniet pariatur corporis consectetur minus vel, ducimus voluptate quis assumenda labore officiis reprehenderit earum, praesentium quo aliquam. Totam, corrupti.
   Cupiditate eum modi quam consectetur dignissimos voluptatem inventore doloribus sed, eaque quas odit, libero rerum quisquam error fugiat. Facilis, laudantium distinctio. Est dolores alias beatae quisquam autem numquam officia at.
   Quasi provident iste molestiae autem quam pariatur veniam, eos itaque distinctio deserunt beatae dolorem dignissimos, cum alias ipsum ut perferendis, quo ex! Molestias sequi numquam magnam eaque aliquid sapiente quidem.
   Aspernatur atque ad numquam expedita facere. Accusantium quas maiores libero, odio et sapiente porro necessitatibus voluptas sed ipsa minus id dicta perspiciatis vel a facilis omnis similique accusamus illum corrupti.</p>) )}
   </>
  )
}


const Scroll = () => {

    const refAboutUs=useRef();

    const handleScroll = () => {
        const aboutUs=refAboutUs.current;
        const currentScrollPosition=window.scrollY;
        const aboutUsScrollPosition=aboutUs.offsetTop;
        const aboutUsHeight= aboutUs.offsetHeight;

        if(currentScrollPosition>= aboutUsScrollPosition - aboutUsHeight){
            aboutUs.classList.add("active")
        }
      
    }
    

    useEffect(()=>{
        document.addEventListener("scroll", handleScroll);
        return(()=>{
            document.removeEventListener("scroll", handleScroll);
        })

    },[])




  return (
   <Container className='mt-4'>
    <Paragraphs/>
    <section className='about-us' ref={refAboutUs}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam nobis placeat repellendus pariatur tenetur! Tempora, dicta, omnis quos ullam sapiente ipsam enim veritatis voluptatem, obcaecati error quisquam reiciendis libero delectus?
        Ullam laudantium soluta sapiente at repudiandae maiores animi. Quibusdam a, ut ullam autem fugit quod nam, error eaque nostrum libero quis, deleniti beatae? Culpa, animi deleniti reprehenderit esse facere magni.
        Reiciendis alias quod similique officiis possimus hic dolor vero facilis, debitis doloremque saepe, reprehenderit, ullam error? Ex nam mollitia optio omnis consequatur magnam? Necessitatibus id amet accusantium eveniet, quos consequuntur.
    </section>
    <Paragraphs/>
   </Container>
  )
}

export default Scroll;