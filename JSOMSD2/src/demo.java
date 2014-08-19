import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import java.io.*;
import java.sql.SQLException;
import java.util.*;	
 
public class demo extends HttpServlet
{

	static Logger log = Logger.getLogger(
                      demo.class.getName());

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        response.setContentType("text/html");
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().println("<h1>Hello Servlet</h1>");
        response.getWriter().println("session=" + request.getSession(true).getId());
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String message = request.getParameter("message");
        // response.getWriter().println("<h1>Hello Servlet</h1>");
            // response.setContentType("text/plain");
            // response.setCharacterEncoding("UTF-8");
            // response.getWriter().write(message);
        log.info(message);
     }
}