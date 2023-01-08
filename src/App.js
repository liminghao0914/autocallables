import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Validation, TwoFactor, Register, Login, ProtectedRoute, AuthedRoute, Footer, Sidebar, ThemeSettings } from './components';
import { Margin, Triditional, Navibar, Dashboard, Invest, Loan, Swap, Earn,Exchange, Tx, Network, Defi, Whitelist, Clearance, Settlement, Assets, Accounts, Calendar, Stacked, Pyramid, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Spot } from './pages';
import './App.css';
import './css/swap.css'
import UseToken from './components/UseToken';

import { useStateContext } from './contexts/ContextProvider';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token

}




const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  const { token, setToken } = UseToken();


  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

/*
  if(!token) {
    return <Login setToken={setToken} />
  }
*/
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
{/*

          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-16 fixed sidebar dark:bg-secondary-dark-bg bg-white ">

            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

*/}


          <div
            className={
                'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-12 w-full  '
            }
          >
            {/*                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 ' */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navibar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* fund  */}
                <Route path="/" element={(<Login />)} />
                <Route path="/swap" element={(<Swap />)} />
                <Route path="/earn" element={(<Earn />)} />
                <Route path="/loan" element={(<Loan />)} />
                <Route path="/dualcurrency" element={(<Invest />)} />
                <Route path="/spot" element={(<Spot />)} />
                <Route path="/triditional" element={(<Triditional />)} />                
                <Route path="/margin" element={(<Margin />)} />

                {/* app  */}
                <Route path="/clearance" element={<Clearance />} />
                <Route path="/settlement" element={<Settlement />} />
                <Route path="/network" element={<Network />} />
                <Route path="/whitelist" element={<Whitelist />} />
                <Route path="/defi" element={<Defi />} />
                <Route path="/Transactions" element={<Tx />} />
                <Route path="/Exchange" element={<Exchange />} />
                <Route path="/Dashboard" element={<Dashboard />} />

                {/* login  */}

            <Route path="/login" component={Login} />            
            <Route path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/2fa" component={TwoFactor} />
            <Route path="/user/validate" component={Validation} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;