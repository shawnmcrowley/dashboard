// pages/[...slug].js
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Layout from '../../components/layout'

const DynamicPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // eslint-disable-next-line react/display-name
  const PageComponent = dynamic(() => import(`./${slug}`).catch(() => () => <div>Page Not Found</div>));
  

  return (
    <Layout>
      <PageComponent />
    </Layout>
  );
};

export default DynamicPage;
