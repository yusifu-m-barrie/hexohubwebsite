import React from 'react';
import '../../App.css';
import CardItem from "../CardItem";



export default function About() {


    return (
    // <h1 className='about'>ABOUT</h1>;
        <div className='cards'>
            <h1>Who We Are!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis erat quis nisi gravida auctor tempus ut lorem.
                Maecenas eros arcu, dignissim sit amet dolor in, congue accumsan mi. Praesent aliquet hendrerit faucibus. Donec blandit lectus viverra,
                dapibus nisl vulputate, finibus sem. Nam justo nunc, pellentesque nec luctus non, sodales sed magna. Aliquam et neque sed dolor ornare scelerisque.
                Pellentesque sit amet neque posuere, rhoncus metus at, viverra tortor. Aliquam a mauris a sapien varius bibendum sit amet eget justo. Duis porta, tortor
                eleifend aliquet finibus, ex ligula dignissim nulla, ac tempor massa nunc in arcu. Quisque pulvinar ante in pharetra dignissim. Suspendisse suscipit venenatis
                ipsum tincidunt efficitur. Ut magna est, dictum id rutrum eu, rutrum pretium erat.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis erat quis nisi gravida auctor tempus ut lorem.
                Maecenas eros arcu, dignissim sit amet dolor in, congue accumsan mi. Praesent aliquet hendrerit faucibus. Donec blandit lectus viverra,
                dapibus nisl vulputate, finibus sem. Nam justo nunc, pellentesque nec luctus non, sodales sed magna. Aliquam et neque sed dolor ornare scelerisque.
                Pellentesque sit amet neque posuere, rhoncus metus at, viverra tortor. Aliquam a mauris a sapien varius bibendum sit amet eget justo. Duis porta, tortor
                eleifend aliquet finibus, ex ligula dignissim nulla, ac tempor massa nunc in arcu. Quisque pulvinar ante in pharetra dignissim. Suspendisse suscipit venenatis
                ipsum tincidunt efficitur. Ut magna est, dictum id rutrum eu, rutrum pretium erat.
            </p>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='We develop diferent types of websites'
                            label='Website Development'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='We develop diferent types of websites'
                            label='Website Development'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-9.jpg'
                            text='We develop diferent types of websites'
                            label='Website Development'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='We develop diferent types of websites'
                            label='Website Development'
                            path='/services'
                        />
                    </ul>


                </div>

            </div>


            <div>

            </div>

        </div>


    )

}
