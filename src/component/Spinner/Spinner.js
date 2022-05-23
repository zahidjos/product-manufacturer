import React from 'react';

const Spinner = () => {
    return (
        <div className='w-1/4 mx-auto text-center '  >
               <button type="button" class="bg-emerald-300 text-orange-400 p-5 ..." disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
   
  </svg>
  Loading...
</button>
        </div>
    );
};

export default Spinner;