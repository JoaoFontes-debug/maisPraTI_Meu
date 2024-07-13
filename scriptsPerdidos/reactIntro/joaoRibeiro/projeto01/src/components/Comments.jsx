import React from "react";
import style from "./Comments.module.css"


function Comment(){
    return(
        <>
            <section className={style.comment}>
                <p className= {style.title}>Titulo</p>
                <p className={style.text}>Texto do cometario</p>
                <p className={style.author}>Autor: X</p>
            </section>
        </>
    )
}

export default Comment;