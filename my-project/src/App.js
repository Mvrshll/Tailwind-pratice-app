import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"f
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Profile Cards Section */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#1bffee" className="h-16 w-16">
                  <path d="M458.159,404.216c-18.93-33.65-49.934-71.764-100.409-93.431c-28.868,20.196-63.938,32.087-101.745,32.087c-37.828,0-72.898-11.89-101.767-32.087c-50.474,21.667-81.479,59.782-100.398,93.431C28.731,448.848,48.417,512,91.842,512c43.426,0,164.164,0,164.164,0s120.726,0,164.153,0C463.583,512,483.269,448.848,458.159,404.216z"></path>
                  <path d="M256.005,300.641c74.144,0,134.231-60.108,134.231-134.242v-32.158C390.236,60.108,330.149,0,256.005,0c-74.155,0-134.252,60.108-134.252,134.242V166.4C121.753,240.533,181.851,300.641,256.005,300.641z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold">Your Name Here</h2>
              <p className="text-gray-600">Software Engineer</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com/your-github-username" className="text-gray-700 hover:text-black">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" alt="GitHub" className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile/" className="text-gray-700 hover:text-blue-700">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/your-facebook-profile/" className="text-gray-700 hover:text-blue-400">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
                </a>
                <a href="https://x.company/your-x-profile" className="text-gray-700 hover:text-blue-400">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/2048px-X_icon_2.svg.png" alt="X" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#1bffee" className="h-16 w-16">
                  <path d="M458.159,404.216c-18.93-33.65-49.934-71.764-100.409-93.431c-28.868,20.196-63.938,32.087-101.745,32.087c-37.828,0-72.898-11.89-101.767-32.087c-50.474,21.667-81.479,59.782-100.398,93.431C28.731,448.848,48.417,512,91.842,512c43.426,0,164.164,0,164.164,0s120.726,0,164.153,0C463.583,512,483.269,448.848,458.159,404.216z"></path>
                  <path d="M256.005,300.641c74.144,0,134.231-60.108,134.231-134.242v-32.158C390.236,60.108,330.149,0,256.005,0c-74.155,0-134.252,60.108-134.252,134.242V166.4C121.753,240.533,181.851,300.641,256.005,300.641z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold">Another Name</h2>
              <p className="text-gray-600">Web Developer</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com/your-github-username" className="text-gray-700 hover:text-black">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" alt="GitHub" className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile/" className="text-gray-700 hover:text-blue-700">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/your-facebook-profile/" className="text-gray-700 hover:text-blue-400">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
                </a>
                <a href="https://x.company/your-x-profile" className="text-gray-700 hover:text-blue-400">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/2048px-X_icon_2.svg.png" alt="X" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#1bffee" className="h-16 w-16">
                  <path d="M458.159,404.216c-18.93-33.65-49.934-71.764-100.409-93.431c-28.868,20.196-63.938,32.087-101.745,32.087c-37.828,0-72.898-11.89-101.767-32.087c-50.474,21.667-81.479,59.782-100.398,93.431C28.731,448.848,48.417,512,91.842,512c43.426,0,164.164,0,164.164,0s120.726,0,164.153,0C463.583,512,483.269,448.848,458.159,404.216z"></path>
                  <path d="M256.005,300.641c74.144,0,134.231-60.108,134.231-134.242v-32.158C390.236,60.108,330.149,0,256.005,0c-74.155,0-134.252,60.108-134.252,134.242V166.4C121.753,240.533,181.851,300.641,256.005,300.641z"></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold">Third Name</h2>
              <p className="text-gray-600">Data Scientist</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com/your-github-username" className="text-gray-700 hover:text-black">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" alt="GitHub" className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile/" className="text-gray-700 hover:text-blue-700">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/your-facebook-profile/" className="text-gray-700 hover:text-blue-400">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
                </a>
                <a href="https://x.company/your-x-profile" className="text-gray-700 hover:text-blue-400">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/2048px-X_icon_2.svg.png" alt="X" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;