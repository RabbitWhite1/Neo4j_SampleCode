/**
 * URL used to access Neo4j REST API to execute queries.
 * Update this parameter to your running server instance.
 *
 * For more information on Neo4J REST API the documentation is available
 * here: http://neo4j.com/docs/stable/rest-api-cypher.html
 */
popoto.rest.CYPHER_URL = "http://localhost:7474/db/data/transaction/commit";

/**
 * Add this authorization property if your Neo4j server uses basic HTTP authentication.
 * The value of this property must be "Basic <payload>", where "payload" is a base64
 * encoded string of "username:password".
 *
 * "btoa" is a JavaScript function that can be used to encode the user and password
 * value in base64 but it is recommended to directly use the Base64 value.
 *
 *  For example Base64 encoded value of "neo4j:password" is "bmVvNGo6cGFzc3dvcmQ="
 *
 ***********************************************************************************
*  /!\ It is not a safe way to keep these credentials in the page as anyone can 
* have access to this code in your web page.
***********************************************************************************
*/
//popoto.rest.AUTHORIZATION = "Basic " + btoa("neo4j:password");

/**
 * Define the Label provider you need for your application.
 * This configuration is mandatory and should contain at least all the labels you could find in your graph model.
 *
 * In this version only nodes with a label are supported.
 *
 * By default If no attributes are specified Neo4j internal ID will be used.
 * These label provider configuration can be used to customize the node display in the graph.
 * See www.popotojs.com or example for more details on available configuration options.
 */
popoto.provider.node.Provider = {
    "Person": {
        "returnAttributes": ["name", "born"],
        "constraintAttribute": "name",
        "autoExpandRelations": true // if set to true Person nodes will be automatically expanded in graph
    },
    "Movie": {
        "returnAttributes": ["title", "released", "tagline"],
        "constraintAttribute": "title"
    }
};

/**
 * Here a listener is used to retrieve the total results count and update the page accordingly.
 * This listener will be called on every graph modification.
 */
popoto.result.onTotalResultCount(function (count) {
    document.getElementById("result-total-count").innerHTML = "(" + count + ")";
});

/**
 * The number of results returned can be changed with the following parameter.
 * Default value is 100.
 *
 * Note that in this current version no pagination mechanism is available in displayed results
 */
popoto.query.RESULTS_PAGE_SIZE = 100;

/**
 * You can activate debug traces with the following properties:
 * The value can be one of these values: DEBUG, INFO, WARN, ERROR, NONE.
 *
 * With INFO level all the executed cypher query can be seen in the navigator console.
 * Default is NONE
 */
popoto.logger.LEVEL = popoto.logger.LogLevels.INFO;

/**
 * Start popoto.js generation.
 * The function requires the label to use as root element in the graph.
 */
popoto.start("Person");