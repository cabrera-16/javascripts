const d= document;
const n= navigator;
const au =n.userAgent;

export default function det_disp(id ){
    console.log(au)
    const $id =d.getElementById(id)
    const isMobile={
        android:()=>au.match(/android/i),
        ios:()=>au.match(/iphone|ipad|ipod /i),
        windows:()=>au.match(/windows phone/i),
        any:function(){
            return this.android()||this.ios()||this.windows();
        },
    }
        
    const isDestop={ 
        linux:()=>au.match(/linux/i),
        mac:()=>au.match(/mac os/i),
        windows:()=>au.match(/windows nt/i),
        any:function(){
            return this.linux()||this.mac()||this.windows();
        }
    }

    const isBrowser={
        chrome:()=>au.match(/chrome/i),
        safari:()=>au.match(/safari/i),
        firefox:()=>au.match(/firefox/i),
        opera:()=>au.match(/opera/i),
        ie:()=>au.match(/ie/i),
        edge:()=>au.match(/edge/i),
        any :function(){
            return(
                this.ie()|| 
                this.edge()||
                this.chrome()||
                this.safari()||
                this.firefox()||
                this.opera()
            );
            
        }
    }
   /* console.log(isMobile.android());
    console.log(isMobile.ios())
    console.log(isMobile.any())
    console.log(isDestop.linux());
    console.log(isDestop.windows())
    console.log(isBrowser.edge())
    console.log(isBrowser.chrome())*/
    $id.innerHTML=`<ul>
        <li>User Agent:<b>${au}</b></li>
        <li>plataforma:<b>${
            isMobile.any()?isMobile.any():isDestop.any()

        }</b></li>
        <li>Navegador:<b>${isBrowser.any()}</b></li>

    </ul>`;

}