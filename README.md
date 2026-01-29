<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# drsskbn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the [residual sum of squares][wikipedia-residual-sum-of-squares] of two double-precision floating-point strided arrays using an improved Kahan–Babuška algorithm.

<section class="intro">

The [residual sum of squares][wikipedia-residual-sum-of-squares] (also referred to as the **sum of squared residuals** (SSR) and the **sum of squared errors** (SSE)) is defined as

<!-- <equation class="equation" label="eq:residual_sum_of_squares" align="center" raw="d = \sum_{i=0}^{N-1} (y_i - x_i)^2" alt="Equation for residual sum of squares."> -->

```math
\mathop{\mathrm{RSS}} = \sum_{i=0}^{N-1} (y_i - x_i)^2
```

<!-- <div class="equation" align="center" data-raw-text="d = \sum_{i=0}^{N-1} (y_i - x_i)^2" data-equation="eq:residual_sum_of_squares">
    <img src="" alt="residual sum of squares.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import drsskbn from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-drsskbn@esm/index.mjs';
```

#### drsskbn( N, x, strideX, y, strideY )

Computes the [residual sum of squares][wikipedia-residual-sum-of-squares] of two double-precision floating-point strided arrays using an improved Kahan–Babuška algorithm.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( [ 1.0, 1.0, -4.0 ] );

var z = drsskbn( x.length, x, 1, y, 1 );
// returns 45.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: stride length for `x`.
-   **y**: second input [`Float64Array`][@stdlib/array/float64].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in strided arrays are accessed at runtime. For example, to compute the [residual sum of squares][wikipedia-residual-sum-of-squares] of every other element in `x` and `y`

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ] );
var y = new Float64Array( [ 2.0, 1.0, 2.0, 1.0, -2.0, 2.0, 3.0, 4.0 ] );

var z = drsskbn( x.length, x, 1, y, 1 );
// returns 72.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float64Array( [ 8.0, -2.0, 3.0, -2.0, 7.0, -2.0, 0.0, -1.0 ] );

var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var z = drsskbn( 4, x1, 2, y1, 2 );
// returns 50.0
```

#### drsskbn.ndarray( N, x, strideX, offsetX,  y, strideY, offsetY )

Computes the [residual sum of squares][wikipedia-residual-sum-of-squares] of two double-precision floating-point strided arrays using an improved Kahan–Babuška algorithm and alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
var y = new Float64Array( [ 1.0, 1.0, -4.0 ] );

var z = drsskbn.ndarray( x.length, x, 1, 0, y, 1, 0 );
// returns 45.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the [residual sum of squares][wikipedia-residual-sum-of-squares] for every other element in `x` and `y` starting from the second element

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, 6.0 ] );
var y = new Float64Array( [ 8.0, -2.0, 3.0, -2.0, 7.0, -2.0, 0.0, -1.0, 4.0 ] );

var z = drsskbn.ndarray( 4, x, 2, 1, y, 2, 1 );
// returns 50.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `0.0`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import drsskbn from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-drsskbn@esm/index.mjs';

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, -50, 50, opts );
console.log( x );

var y = discreteUniform( 10, -50, 50, opts );
console.log( y );

var d = drsskbn( x.length, x, 1, y, 1 );
console.log( d );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



* * *

<section class="references">

## References

-   Neumaier, Arnold. 1974. "Rounding Error Analysis of Some Methods for Summing Finite Sums." _Zeitschrift Für Angewandte Mathematik Und Mechanik_ 54 (1): 39–51. doi:[10.1002/zamm.19740540106][@neumaier:1974a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-drsskbn.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-drsskbn

[test-image]: https://github.com/stdlib-js/blas-ext-base-drsskbn/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/blas-ext-base-drsskbn/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-drsskbn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-drsskbn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-drsskbn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-drsskbn/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-drsskbn/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-drsskbn/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-drsskbn/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-drsskbn/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-drsskbn/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-drsskbn/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-drsskbn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-drsskbn/main/LICENSE

[wikipedia-residual-sum-of-squares]: https://en.wikipedia.org/wiki/Residual_sum_of_squares

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64/tree/esm

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@neumaier:1974a]: https://doi.org/10.1002/zamm.19740540106

</section>

<!-- /.links -->
