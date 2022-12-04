import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import publicRoutes from './routes';

function App() {
    const [isModeTheme, setIsModeTheme] = useState(true);

    const handleSetTheme = (mode) => {
        setIsModeTheme(mode);
    };

    return (
        <Router>
            <div className="App">
                <div
                    style={{
                        position: 'fixed',
                        width: '100%',
                        zIndex: 9999,
                    }}
                >
                    <Header
                        isModeTheme={isModeTheme}
                        onSetTheme={handleSetTheme}
                    />
                </div>

                <div>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<Page isModeTheme={isModeTheme} />}
                                />
                            );
                        })}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
