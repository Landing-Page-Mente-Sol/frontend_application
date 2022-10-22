export class QueryString {
  private _parameters: string[];
  private _values: string[];
  private _query: string;

  constructor(parameters?: string[], values?: string[]) {
    if(parameters !== undefined && values !== undefined){ this._parameters = parameters; this._values = values; }
    else { this._parameters = []; this._values = []; }

    this._query = '';
  }

  private stringQuery(parameters: string[], values: string[]): string {
    //start value
    this._query = '?' + parameters[0] + '=' + values[0];

    for(let i = 1; i < parameters.length; ++i)
      this._query += '&'+ parameters[i]+ '=' + values[i];

    return this._query;
  }

  private parametersValuesError(parameters: string[], values: string[]): boolean {
    return parameters.length !== values.length || parameters.length === 0 || values.length === 0
  }

  /**
    Return query string value or an empty string
   <br/>
   Formed from the values of the string arrays passed in the constructor or those passed as arguments in this method
   <br/>
   If `parameters` and `values` are undefined, this method use the arrays passed in the constructor.
   <br/>
   For correct execution:
    @param parameters non-zero length and equal length with `values` parameter
    @param values non-zero length and equal length with `parameters` parameter
   **/
  public toQueryString(parameters?: string[], values?: string[]): string {

    if(parameters !== undefined && values !== undefined) {
      if(this.parametersValuesError(parameters, values))
        return '';
      return this.stringQuery(parameters, values);
    }

    if(this.parametersValuesError(this._parameters, this._values))
      return '';

    return this.stringQuery(this._parameters, this._values);
  }

  /**
    Push the values of parameters to string arrays available in this class
  */
  public pushNewParameters(parameters: string | string[], values: string | string[]): void {
    if(typeof parameters === 'string' && typeof values === 'string') { this._parameters.push(parameters); this._values.push(values); }
    else {this._parameters = this._parameters.concat(parameters); this._values = this._values.concat(values);}
  }
  /**
   Return query string value
   <br/>
   If the toStringQuery() method was previously executed, returns that value. else, return an empty string
   */
  public query(): string { return this._query; }

}
