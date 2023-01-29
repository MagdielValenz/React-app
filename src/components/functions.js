import React from 'react'
import { useState, useRef,useMemo,useEffect} from 'react';

export function InObserver(){
  const target1 = useRef(null);
  const [Visible,setVisible] = useState(false);
  
  const callback = entries => {
    const [entry] = entries; // const
    setVisible(entry.isIntersecting);
    
    entries.forEach((e) => {
      if(e.isIntersecting){
        e.target.classList.add('visible');
      }else{
        e.target.classList.remove('visible');
  
      }
    });
    
  }
  const options =useMemo(() => {
    return{
      root:null,
      rootMargin: '0px',
      threshold: 0.4
    }
  }, []);

  useEffect(() =>{
    const im1 = document.getElementById('i1');
    const im2 = document.getElementById('i2');
    const observer = new IntersectionObserver(callback, options);
    const currentTarget = target1.current; 
    if(currentTarget) observer.observe(currentTarget);
    observer.observe(im1);
    observer.observe(im2);
    return () => {
      if(currentTarget) observer.unobserve(currentTarget);
      
    }
  }, [target1], options);

}

function Alerta(){
    console.log('1')
          const z = document.getElementById('pagina-principal');
          const w = document.getElementById('alerta');
          const a = w.style.display = 'block';
          if (a){
            z.addEventListener('click',()=>{
              w.style.display = 'none';
            });
          }
}


export default Alerta;
