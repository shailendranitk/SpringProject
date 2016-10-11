package com.koderunner.dao;

import java.util.List;
import java.util.Properties;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;

import com.koderunner.vo.SDUserVO;

public class SDUserDAO {
	private static SessionFactory sessionFactory = null;  
    private static ServiceRegistry serviceRegistry = null;  
       
    private static SessionFactory configureSessionFactory() throws HibernateException {  
        Configuration configuration = new Configuration();  
        configuration.configure();  
        Properties properties = configuration.getProperties();
        serviceRegistry = new ServiceRegistryBuilder().applySettings(properties).buildServiceRegistry();          
        sessionFactory = configuration.buildSessionFactory(serviceRegistry);  
        return sessionFactory;  
    }
	
	 @SuppressWarnings("unchecked")
	public Integer checkUser(String pEmailId, String pPassword) {
	        Integer noofuser = 0;
	        List<Integer> totuser = null;
	        Transaction tx = null;
	        Session session = null;
	        // Configure the session factory
	        configureSessionFactory();
	        try {
	        	session = sessionFactory.openSession();
	            tx = session.beginTransaction();
	            totuser = session.createSQLQuery("SELECT count(*) FROM SDUSER_DETAILS where EMAIL_ID='" + pEmailId + "' and PASSWORD='" + pPassword + "'").list();
	            String val = "" + totuser.get(0);
	            noofuser = Integer.parseInt(val);
	            tx.commit();
	            tx = null;
	        } catch (HibernateException e) {
	            e.printStackTrace();
	        } finally {
	            session.close();
	        }
	        return noofuser;
	    }
	 
	 public void save(SDUserVO pUserDetails) {
		 	Transaction tx = null;
	        Session session = null;
	        // Configure the session factory
	        configureSessionFactory();
	        try {
	        	session = sessionFactory.openSession();
	             tx = session.beginTransaction();
	            session.saveOrUpdate(pUserDetails);
	            tx.commit();
	        } catch (Exception e) {
	            e.printStackTrace();
	        } finally {
	            session.clear();
	            session.close();
	        }
	    }

}
