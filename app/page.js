'use client'
import Image from 'next/image'
import { WiStars } from 'react-icons/wi';
import { useEffect, useState } from 'react';
import { PiShootingStarLight } from 'react-icons/pi';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { ImSpinner9 } from 'react-icons/im';
import Accordion from './According';
import CountdownTimer from './CountDown';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GiBeveledStar,GiReceiveMoney } from 'react-icons/gi';
import { FaShippingFast } from 'react-icons/fa';



export default function Home() {


  const [index, setIndex] = useState( 0 );
  const images = [

    '/img1.jpeg',
    '/img2.webp',
    '/img3.jpeg',
    '/img4.jpeg',
    '/img5.jpeg',
    '/img6.webp',
    '/img7.jpeg',
    '/img8.jpeg',
    '/img9.jpeg',
    '/img10.jpeg',
    
  ];


  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,

  };


  const [loading, setLoading] = useState( false );
  const [formData, setFormData] = useState( {
    color: '',
    size: '',
    quantity: '',
    phone: '',
    address: '',
    additionalInfo: '',
  } );

  const handleChange = ( e ) => {
    const { name, value } = e.target;
    setFormData( {
      ...formData,
      [name]: value,
    } );
  };

  const handleSubmit = () => {
    setLoading( true ); 
    const formElement = document.getElementById( 'form' );
    const formData = new FormData( formElement );

    const xhr = new XMLHttpRequest();
    xhr.open( 'POST', formElement.action, true );

    xhr.onreadystatechange = function () {
      if ( xhr.readyState === XMLHttpRequest.DONE ) {
        if ( xhr.status === 200 ) {
        

          window.location.href = '/success';


        } else {
          alert( errorMessage ); 
        }
        setLoading( false );
      }
    };

    xhr.send( formData );
  };







  const accordionItems = [
    {
      title: 'استرجاع سهل',
      content: 'ما عليك سوى إرجاعه خلال 15 يومًا للاستبدال أو استرداد الأموال.',
    },
    {
      title: 'ما هي مادة هذا المنتج؟',
      content: 'هذا المنتج مصنوع من 100٪ قطن وتم استخدام أفضل الأقمشة للحفاظ على راحة البشرة.'
    },
    {
      title: 'ما هو لون طقم السويت شيرت؟',
      content: 'طقم السويت شيرت للنساء بتصميم القطه متوفر بلون الاسود والرمادي .'
    },
    {
      title: 'ما نوع الطباعة المستخدمة في هذا المنتج؟',
      content: 'هذا المنتج يتميز بتصميم قطه بشكل مميز وجذاب .'
    },
    {
      title: 'كيفية تنظيف طقم السويت شيرت؟',
      content: 'يجب غسل هذا المنتج بالماء البارد فقط وتجفيفه عند درجة حرارة منخفضة للحفاظ على جودته.'
    }
   
  ];
















  useEffect( () => {


    // تخزين الدالة المستخدمة عند إضافة الحدث
    const handleScroll = () => {
      if ( window.pageYOffset > 100 ) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    };

    // إضافة الحدث واستخدام الدالة المخزنة
    window.addEventListener( "scroll", handleScroll );
    var scrollToTopButton = document.getElementById( "scrollToTopButton" );

    scrollToTopButton.addEventListener( "click", function () {
      window.scrollTo( {
        top: 0,
        behavior: "smooth" // التمرير بشكل ناعم
      } );
    } );
    // تنظيف الحدث عند تفريغ المكون
    return () => {
      // إزالة الحدث باستخدام نفس الدالة المستخدمة
      window.removeEventListener( "scroll", handleScroll );
    };
  }, [] );
  

  return (
    <>
      <div class="whatsapp-button">
        <a href="https://wa.me/+905515882186" target="_blank">
          <Image
            src="/whatsapp1.png"
            alt="WhatsApp"
            width={ 100 }
            height={ 100 }
          />
        </a>
      </div>

      <button id="scrollToTopButton">
        <BsFillArrowUpCircleFill/>
      </button>

      <div className='main-container'>
        
        <div className='sec-1 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7'>
          <div className='sec9'>
          <Slider
            { ...settings }
            className="image-container"
            beforeChange={ ( oldIndex, newIndex ) => setIndex( newIndex ) }
          >
            { images.map( ( image, i ) => (
              <Image
                src={ image  }
                alt="product image"
                width={ 800 }
                height={ 1200 }
                key={ i }
                priority={ true }
                quality={ 100 }
                blurDataURL={ `data:img2/avif` }
                placeholder='blur'
                loading='eager'

              //  fill
              />
            ) ) }
          </Slider>
        </div>
        
          <div className='div2-sec-1'>
            <h3>{`طقم بدلة رياضية نسائية كبيرة الحجم بتصميم قطة لطيفة`}</h3>
            <div className='prices'>
              <div> <h4>TRY331.00</h4></div>
              <div> <h5> TRY553.00</h5></div>
         

            </div>

            <div className='div3-sec1'>
              <h2 className='flex items-start' ><div className='GiBeveledStar-1'><GiBeveledStar className='pt-1' /></div>{ `إذا كنتِ تبحثين عن الأناقة والراحة في قطعة واحدة، فإن هذا الطقم هو اختيارك الأمثل. هذا التصميم الجميل يجمع بين الجاذبية والراحة، والآن يمكنكِ الحصول عليه بسعر لا يصدق!`}</h2>
              
            </div>

            <div className='go-buy-button'>
              <a href="#form">{`الشراء الان`}</a>
            </div>




          </div>
          

        </div>

       
        <div className='div1-sec2 py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container content-center gap-3 my-7'>
          <div>
         
            <ul>
              <h2>{ `مميزات المنتج :` }</h2>
              <li><div><WiStars /></div>{`تصميم أنيق يضمن لكِ الأناقة والثقة في أي وقت.`}</li>
              <li><div><WiStars /></div>{`نسيج عالي الجودة يضمن لكِ الراحة طوال اليوم.`}</li>
              <li><div><WiStars /></div>{`قصة كبيرة الحجم توفر حرية الحركة والملاءمة المثالية.`}</li>
              <li><div><WiStars /></div>{`متوفر بتصميم قطة لطيفة لإضافة لمسة مميزة إلى إطلالتك.`}</li>
              <li><div><WiStars /></div>{`إمكانية الغسيل السهلة والمتكررة دون التأثير على الجودة.`}</li>
            </ul>
          </div>
        
          <div className='div2-sec2-image-container'><Image src="/img5.jpeg" alt="" width={ 800 } height={ 1200 } /></div>
       
        </div>
       
        <div className='sec8'>
          <h2>{ `لا تفوتي هذه الفرصة الرائعة للحصول على هذا الطقم بسعر خاص ومذهل. اجعليه جزءًا من مجموعتك وتألقي بأناقة لا مثيل لها.` }</h2>
          <CountdownTimer />
          <div className='prices'>
            <div> <h4>TRY249.00</h4></div>
            <div> <h5> TRY599.00</h5></div>
          </div>
          <div className='go-buy-button'>
            <a href="#form">{`الشراء الان`}</a>
          </div>
        </div>

        <div className='sec3 gap-4'>
          <div>
            <div><Image src="/img11.svg" alt="img" width={50} height={50}/></div>
            <div>{`شحن سريع من 1-3`}</div>
          </div>
          <div>
            <div><Image src="/img12.svg" alt="img" width={50} height={50}/></div>
            <div>{`الدفع عند الاستلام`}</div>
          </div>
          <div>
            <div><Image src="/img13.svg" alt="img" width={50} height={50}/></div>
            <div>{`خدمه الزبائن عبر الهاتف`}</div>
          </div>
          <div>
            <div><Image src="/img14.svg" alt="img" width={50} height={50}/></div>
            <div>{`ضمانه 100 %`}</div>
          </div>
</div>

      
        <div className='sec-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-6' >
          <div>
            <Image src="/img1.jpeg" alt="" width={ 800 } height={ 1200 } />
            <p>{ `تألقي بأسلوبك الشخصي وابتعدي عن العادة. مع ملابس القطة، يمكنك التعبير عن شخصيتك وأسلوبك بأناقة. اختاري التصميم الذي يعكسك بشكل مثالي.`}</p>
          </div>
          <div>
            <Image src="/img5.jpeg" alt="" width={ 800 } height={ 1200 } />
            <p>{ `تمثل ملابس القطة للنساء تجربة ملابس فاخرة بأسعار معقولة. تصميمات متفردة وجودة استثنائية تضمن لكي الأناقة والراحة في آن واحد.`}</p>
          </div>
          <div>
            <Image src="/img10.jpeg" alt="" width={ 800 } height={ 1200 } />
            <p>{ `اكتشفي عالمًا جديدًا حيث تتمازج أناقة ملابس القطة مع الراحة. تبرز هذه الملابس بأسلوبك بشكل استثنائي من خلال مزيج رائع من التصاميم العصرية والأصالة.`}</p>
          </div>

        </div>


 
       
        




        <div className='sec7 container'>
          <div className="main-title">
            <h2>{`مزايا المنتج ولماذا نحن`}</h2>
          </div>
          { accordionItems.map( ( item, index ) => (
            <Accordion key={ index } title={ item.title } content={ item.content } />
          ) ) }
        </div>


       
        <div className='sec-8 container pb-6 pt-8'>


          <form
            method="POST"
            action="https://script.google.com/macros/s/AKfycbzD5AJUGL1pTGaKmfGg9zDgoI7-H9L64QlNvhnP6fJKnsEspSlXeOAoEm0mSOJAbquFMw/exec"
        
            id="form"
          >
            <div>
              <label htmlFor="color">اللون</label>
              <select
                id="color"
                name="color"
                onChange={ handleChange }
                value={ formData.color }
              >
                <option value="black" style={ { backgroundColor: 'black' } }>
                  الاسود
                </option>
                <option value="gray" style={ { backgroundColor: 'gray' } }>
                  الرمادي
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="size">المقاس</label>
              <select
                id="size"
                name="size"
                onChange={ handleChange }
                value={ formData.size }
              >
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="2xl">2XL</option>
                <option value="3xl">3XL</option>
              </select>
            </div>
            <div>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                placeholder="الكميه"
                onChange={ handleChange }
                value={ formData.quantity }
              />
            </div>
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="رقم الهاتف *"
                onChange={ handleChange }
                value={ formData.phone }
              />
            </div>
            <div>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="العنوان بالتفصيل"
                onChange={ handleChange }
                value={ formData.address }
              />
            </div>
            <div>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                placeholder="ملاحظات اضافيه اذا وجد"
                onChange={ handleChange }
                value={ formData.additionalInfo }
              ></textarea>
            </div>

            <div>
              <button type="button" onClick={ handleSubmit } id="submit" >
                Sepete Ekle
                { loading && (
                  <ImSpinner9 className="animate-spin ml-2" />
                ) }

              </button>
            </div>
          </form>







        </div>







    </div>
    </>
  )
}
