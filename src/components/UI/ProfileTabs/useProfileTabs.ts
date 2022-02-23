import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../hooks/useAppSelector';

const useProfileTabs = () => {
  const [mounted, setMounted] = useState(false);
  const isTabLoading = useAppSelector(state => state.loadingTab.isLoadingTab);
  const isPageLoading = useAppSelector(state => state.loadingPage.isLoadingPage);
  const [classString, setClassString] = useState('profile-tabs');
  useEffect(() => {
    if (isTabLoading && isPageLoading) {
      setClassString('profile-tabs profile-tabs--loading');
    }
    if (isTabLoading && !isPageLoading) {
      setClassString('profile-tabs profile-tabs--loading');
    }
    if (!isTabLoading && mounted) {
      setClassString('profile-tabs profile-tabs--loaded');
      setTimeout(() => {
        setClassString('profile-tabs')
      }, 500)
    }
    setMounted(true);
  },[isTabLoading])

  return classString;
}

export default useProfileTabs;