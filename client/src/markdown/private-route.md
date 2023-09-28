
### React'ta Basit Private Route Nasıl Oluşturulur?
Selam arkadaşlar! Bu yazıda, React'ta nasıl basit bir private route oluşturulacağını göreceğiz.

İlk olarak, projeden bahsetmek istiyorum. Bir sayfam var ve bu sayfaya sadece giriş yapmış kullanıcıların erişmesini istiyorum. Giriş yapmayanları veya çıkış yapanların otomatik olarak Login sayfasına yönlendirilmesini istiyorum. Mantık çok basit olacak: Eğer bir kullanıcı varsa anasayfaya yönlendirilecek, aksi halde giriş sayfasına yönlendirilecek.

Projemizi oluşturalım. Bunun için Vite'ı kullanıyorum. Aşağıdaki komutu kullanarak projeyi oluşturun:
<code language="javascript"> npm create vite@latest </code>

Proje oluşturulduktan sonra, terminalde projenin dizinine gidin ve aşağıdaki komutu çalıştırarak gerekli paketleri yükleyin:

<code language="javascript"> npm install </code>

#### terminalimde 
<code language="javascript"> code . </code>
diyerek editörümü açıyorum ve 
<code language="javascript">npm run dev </code>
<br>
ile projemi başlatıyorum. ve projemdeki gereksiz dosyaları silip ihtiyacım olan kütüphaneleri yüklüyorum 
React Router işlemleri için react-router-dom paketini kullanacağız. Bunun için gerekli kütüphaneyi yükleyelim:
<code language="javascript"> npm install react-router-dom </code>
gerekli  routlarımı oluşturuyorum


```js

import { Footer, Navbar } from '@/components'
import './globals.scss'
import { Inter } from 'next/font/google'
import { ThemeContextProvider } from '@/context/themeContext'
import ThemeProvider from '@/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aelita | Full Stack Developer',
  description: 'Full Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html >
  )
}


```

### App.jsx
<code language="javascript">  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage, BlogPage, HomePage, LoginPage } from './pages';
import { Navbar } from "./components";

function App() {
  return (
    &lt;div className='w-full h-screen'&gt;
      &lt;Router&gt;
        &lt;Navbar /&gt;
        &lt;Routes&gt;
          &lt;Route element=&lt;HomePage /&gt; path="/" /&gt;
          &lt;Route element=&lt;AboutPage /&gt; path="/about" /&gt;
          &lt;Route element=&lt;BlogPage /&gt; path="/blogs" /&gt;
          &lt;Route element=&lt;LoginPage /&gt; path="/login" /&gt;
        &lt;/Routes&gt;
      &lt;/Router&gt;
    &lt;/div&gt;
  );
}

export default App;

</code>

ve Navbar.jsx'te navigasyon işlemlerimi oluşturuyorum

### components/Navbar.jsx
<code language="javascript">  
import { Link } from "react-router-dom";
export function Navbar() {
    return (
        &lt;nav&gt;
            &lt;div&gt;
                &lt;Link to="/"&gt; Home&lt;/Link&gt;
            &lt;/div&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;Link to="/about"&gt; About&lt;/Link&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;Link to="/blogs"&gt; Blog&lt;/Link&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;Link to="/login"&gt; Login&lt;/Link&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    )
}

</code>

user'ın giriş yapıp yapmadığını sorgulamak için ben redux toolkit kullanacağım bunun için gerekli kütüphanelerimi yüklüyorum.
<code language="javascript"> npm install @reduxjs/toolkit react-redux </code>

projemin ana dizinine store adında bir klasör oluşturup içerisinde index.js ve authSlice.js dosyaları yaratıyorum

### store/authSlice.js
<code language="javascript">
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    auth: false,
}
export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: state => {
            state.auth = !state.auth
        }
    }
})
export const { setAuth } = auth.actions
export default auth.reducer
</code>
### store/index.js
<code language="javascript">
import { configureStore } from "@reduxjs/toolkit"
import auth from "./authSlice"

const store = configureStore({
    reducer: {
        auth
    },
})
export default store
</code>

Bu şekilde global olarak user durumunu kontrol edebilir ve ona göre aksiyonlarımı belirleyebilirim.

Yine anadizinde utils adında bir klasör oluşturalım burada Privete route kontrolümüzü yapacağız.
<code> mkdir utils </code>
diyerek klasörümüzü kuruyoruz ve PrivateRoute.jsx adında bir dosya oluşturuyoruz

### utils/PrivateRoute.jsx
<code laguage="javascript">

import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const { auth } = useSelector(state => state.auth)

    return (
        auth ? &lt;Outlet/&gt; : &lt;Navigate to="/login" /&gt;
    )
}
export default PrivateRoutes 
</code>

### components/Navbar.jsx

<code language="javascript">
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAuth } from '../../store/authSlice'
export function Navbar() {
    const dispatch = useDispatch()
    const { auth } = useSelector(state => state.auth)

    return (
        &lt;nav&gt;
            &lt;div&gt;
                &lt;Link to="/"&gt;Home&lt;/Link&gt;
            &lt;/div&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;Link to="/about"&gt;About&lt;/Link&gt;
                &lt;/li&gt;
                &lt;li"&gt;
                    &lt;Link to="/blogs"&gt; Blog&lt;/Link&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;Link to="/login"&gt;
                        &lt;button onClick={() =&gt; dispatch(setAuth())}&gt;
                            {auth ? "Logout" : "Login"}
                        &lt;/button&gt;
                    &lt;/Link&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    )
}
</code>

 
# tebrikler 🎉🎉