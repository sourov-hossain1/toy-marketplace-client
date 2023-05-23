import useTitle from "../../hooks/useTitle";

const Blog = () => {

    useTitle('Blogs')

    return (
        <div>
            <div className="mt-6 ps-4">
                <h2 className="text-xl">Question-1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <h5>Ans: An access token is a credential that validates a user authorization to access specific resources or perform actions in an application. It is short-lived and included in request headers or query parameters for subsequent authentication. A refresh token, on the other hand, is a long-lived credential that allows the client to obtain a new access token without reauthentication. Refresh tokens are securely stored on the client-side and used when the access token expires. Best practices for storing tokens include using HTTP-only cookies with secure attributes for web applications, secure storage mechanisms on mobile platforms, and cautious use of local or session storage for single-page applications. Safeguarding tokens is crucial to prevent unauthorized access and ensure secure communication between the client and server.</h5>
            </div>
            <div className="mt-6 ps-4">
                <h2 className="text-xl">Question-2: Compare SQL and NoSQL databases?</h2>
                <h5>Ans: SQL (Structured Query Language) databases are based on a relational model and use a predefined schema to store and organize data in tables with rows and columns. They provide strong consistency, support complex queries, and ensure data integrity through relationships and constraints. In contrast, NoSQL (Not only SQL) databases employ various data models like key-value, document, columnar, or graph, allowing for flexible and schema-less data storage. NoSQL databases prioritize scalability, high availability, and performance, often sacrificing strict consistency in favor of eventual consistency. They are suitable for handling large amounts of unstructured or rapidly changing data in distributed environments.</h5>
            </div>
            <div className="mt-6 ps-4">
                <h2 className="text-xl">Question-3: What is express js? What is Nest JS ?</h2>
                <h5>Ans:Express.js is a lightweight and flexible web application framework for Node.js that simplifies the process of building web applications and APIs. It allows developers to handle routes, HTTP requests, and responses efficiently. Express.js provides a minimalistic approach, giving developers the freedom to structure their applications as they see fit. It has a vibrant ecosystem with numerous middleware options and extensions available, making it highly customizable. Nest.js, on the other hand, is a progressive TypeScript framework inspired by Angular, designed for building scalable and maintainable server-side applications. It leverages decorators, dependency injection, and a modular architecture to provide a robust development experience. Nest.js is well-suited for building enterprise-grade applications and embraces modern JavaScript and TypeScript practices.</h5>
            </div>
            <div className="mt-6 ps-4">
                <h2 className="text-xl">Question-4: What is MongoDB aggregate and how does it work?</h2>
                <h5>Ans:In MongoDB, the aggregate function is used to perform advanced data aggregation operations on a collection of documents. It allows you to process and transform the data using a pipeline of stages. Each stage represents a specific operation, such as filtering, grouping, sorting, or calculating aggregate values. The pipeline consists of multiple stages that are executed in sequence, with the output of one stage serving as the input for the next. This enables powerful data manipulation and aggregation capabilities, providing a flexible and efficient way to retrieve and analyze data in MongoDB.</h5>
            </div>
        </div>
    );
};

export default Blog;