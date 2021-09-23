import { NextRouter } from "next/router";

export const importPageInQuery = (router:NextRouter, page:number):void => {  
  if(page !== 1){
    router.push({
      pathname: router.route,
      query: {
          ...router.query,
          page,
      }
  });
  }else{
    const filters = {...router.query};
    delete filters.page;
    router.push({
      pathname: router.route,
      query: {
          ...filters
      }
  });
  }  
    
};

export const importSearchInQuery = (router:NextRouter, search:string):void => {    
    if(search !== ''){
        delayFun(
            () => {
              router.push({
                pathname: router.route,
                query: {
                  search,
                },
              });
            },
            "search",
            500
          );
    }else{
      delayFun(
        () => {
          router.push(router.route);
        },
        "search",
        500
      );
    }
    
};

export const delayFun = (callback: () => void, key: string, delay = 1000):void => {
    if(localStorage.getItem(key) !== undefined && localStorage.getItem(key) !== null){
        clearTimeout(JSON.parse(localStorage.getItem(key) as string));
    }
    const timeoutId = setTimeout(() => {
      callback();
    }, delay);
    localStorage.setItem(key, JSON.stringify(timeoutId));
  };